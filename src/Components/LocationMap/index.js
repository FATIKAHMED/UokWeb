import {
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
  Fragment,
  memo,
} from "react";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  DirectionsRenderer,
  Circle,
  LoadScript,
  useJsApiLoader,
  MarkerClusterer,
  InfoWindow,
} from "@react-google-maps/api";

import { makeStyles, useTheme } from "@mui/styles";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  FormControl,
  Grid,
  TextField,
  toggleButtonGroupClasses,
  Typography,
  useMediaQuery,
} from "@mui/material";

import isEmpty from "../../Utils/isEmpty";
import SelectMultiple from "../SelectMultiple";
import SelectMultipleTag from "../SelectMultipleTag";
import useAuth from "../../Hooks/useAuth";
import ImgDropMap from "../ImgDropMap/index.js";
import Loader from "../Loader";
import Places from "../Places";
import TagsInput from "../TagsInput";

import marker from "../../Assets/markerLocation.png";
import circle from "../../Assets/Gallery/circle.png";

import mapStyles from "./mapStyles";
import "./index.css";
import VideoPreviewModal from "../VideoPreviewModal";
import PostModal from "../PostModal";
import SearchMobileModal from "../SearchMobileModal";
import axios from "axios";

// type LatLngLiteral = window.google.maps.LatLngLiteral;
// type DirectionsResult = window.google.maps.DirectionsResult;
// type MapOptions = window.google.maps.MapOptions;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    // display: "flex",
    // flexDirection: "column",
    // alignItems: 'center',
    // justifyContent:"center",
    // [theme.breakpoints.down("md")]:{
    //   flexDirection:"column-reverse"
    // }
    "& .gm-style.gm-style-iw-c": {
      width: "192px",
      height: "174px",
    },
    // "& .gm-style-iw-d": {
    //   [theme.breakpoints.down("sm")]:{
    //     "overflow": "hidden",
    //     "paddingRight": "1rem",
    //     "paddingBottom": "1rem",
    //   }
    // },
  },
  postShareBox: {
    minHeight: 155,
    maxWidth: 392,
    height: "100%",
    display: "flex",
    gap: "1rem",
    overflow: "hidden",
    // alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    "& .uploadBox": {
      background: "#f7f7f7",
      // height: "135px",
      // width: "135px",
      width: "100%",
      height: "110px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "6px",
      marginTop: ".5rem",
      overflow: "auto",
    },
    "& .formBox": {
      height: "100%",
      maxWidth: "216px",
      textAlign: "right",
      // marginTop: ".75rem",

      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        padding: "0 1rem",
      },
      "& .formControl": {
        marginBottom: "1rem",
        "& .MuiInputBase-root:before": {
          borderBottom: "1px solid #100082",
        },
      },
      "& .btnPrimary": {
        width: 134,
        height: 30,
        fontWeight: 600,
        marginTop: ".5rem",
        textTransform: "capitalize",
      },
    },
    "& .error": {
      fontSize: "10px",
      color: "red",
    },
  },
  cardMarker: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "194px",
      width: "100%",
    },
    // "& .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded": {
    // },

    "& .cardContent": {
      fontSize: "1rem",
      fontWeight: "600",
      margin: 0,
      padding: 0,
      paddingTop: "0.5rem",
      display: "flex",
      flexDirection: "column",
      gap: ".5rem",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },

      "& .find": {
        fontSize: "1rem",
        fontWeight: "600",
        margin: 0,
      },
      "& .address": {
        display: "-webkit-box",
        WebkitLineClamp: "1",
        WebkitBoxOrient: "vertical",
        width: "100%",
        overflow: "hidden",
        fontSize: ".8rem",
        margin: 0,
        // marginBottom: ".3rem",
        maxWidth: "100%",
        fontWeight: 400,
      },
      "& .chip": {
        height: "22px",
        minWidth: "86px",
        maxWidth: "100px",
        color: "#fff",
        background: "#FC0954",
        fontSize: "12px",
        fontWeight: "500",
        padding: "0 12px",
        marginRight: "2px",
        [theme.breakpoints.down("sm")]: {
          fontSize: "10px",
          minWidth: "56px",
          padding: 0,
        },
      },
    },
  },

  // infoBoxPost: {
  //   "& .gm-style .gm-style-iw-c": {
  //     "transform": "translate3d(-50%,-106%,0) !important",
  //     "boxShadow": "0 2px 7px 1px rgb(0 0 0 / 30%) !important"
  //   },
  //   "& .gm-style .gm-style-iw-t::after": {
  //     "boxShadow": "-2px 2px 2px 0 rgb(178 178 178 / 40%) !important",
  //     "height": "25px !important",
  //     "transform": "translate(-50%,-100%) rotate(-45deg) !important",
  //     "width": "25px !important",
  //   }
  // }
}));

const LocationMap = ({
  onAddressChange,
  latLng,
  openMobileSearch,
  onOpenMobileSearch,
  onAddressChangeMobile,
  openPost,
  setOpenPost,
  openPostBtn,
  setOpenPostBtn,
}) => {
  const theme = useTheme();
  const classes = useStyles();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const { tags, createPost, getPostsGeneral, getTags } = useAuth();

  const [posts, setPosts] = useState([]);
  const intialValues = { find: "", location: null, tags: [], files: [] };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState(null);
  const [attachementFiles, setAttachementFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  //// const [tags, setTags] = useState([]);
  // const [isSubmitting, setIsSubmitting] = useState(false);

  const [selected, setSelected] = useState(null);
  const [office, setOffice] = useState({ lat: 43.45, lng: -80.49 });

  // const [openPost, setOpenPost] = useState(false);

  const [showInfo, setShowInfo] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(13);
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState(null);

  // const [directions, setDirections] = useState({});

  const mapRef = useRef(null);
  // const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
  const [center, setCenter] = useState({ lat: 43.45, lng: -80.49 });
  const options = useMemo(
    () => ({
      mapId: "ab3b63dab200976b",
      disableDefaultUI: false,
      clickableIcons: false,
      gestureHandling: "greedy",
      // mapTypeControl: false,
      scaleControl: true,
      zoomControl: false,
      pixelRatio: window.devicePixelRatio || 1
      // scrollwheel: false,
      // gestureHandling: 'none',
    }),
    []
  );
  const onLoad = useCallback((map) => (mapRef.current = map), [mapRef.current]);
  //// const onLoad = useCallback((map) => (mapRef.current = map), []);

  // const getFullAddress = async (location) => {
  //   console.log("location", location)
  //   const { lat, lng } = location
  //   const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`;

  //   try {
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     // const data = await axios.get(url)
  //     console.log("DATA", data)
  //     const { formatted_address, geometry: { location }, place_id } = data?.results[0];
  //     return formatted_address

  //   }
  //   catch (e) {
  //     console.error("error", e)
  //   }
  // }

  const onMapClick = useCallback(
    async (e) => {
      const { lat, lng } = e.latLng;
      console.log("handleClick lat-->", lat());
      console.log("handleClick lng-->", lng());
      const location = { lat: lat(), lng: lng() };
      await onAddressChange(location);
      setOffice(location);
      setFormValues({ ...formValues, location });
      setOpenPost(true);
      setIsOpen(false);
    },
    [onAddressChange]
  );

  // const generateHouses = (position) => {
  //   const _houses = [];
  //   for (let i = 0; i < 100; i++) {
  //     const direction = Math.random() < 0.5 ? -2 : 2;
  //     _houses.push({
  //       location: {
  //         lat: position.lat + Math.random() / direction,
  //         lng: position.lng + Math.random() / direction,
  //       },
  //       title: `location ${i}`,
  //       _id: i
  //     });
  //   }
  //   return _houses;
  // };
  // const generateHouses = (arr, position) => {
  //   let direction;
  //   return arr.map(item => {
  //     direction = Math.random() < 0.5 ? -2 : 2;
  //     item.location = {
  //       lat: position.lat + Math.random() / direction,
  //       lng: position.lng + Math.random() / direction,
  //     }
  //     return item;
  //   })

  // };

  // const houses = useMemo(() => generateHouses(posts, center), [center]);

  // const fetchDirections = (house) => {
  //   if (!office) return;
  //   console.log("fetchDirections-->", house)
  //   const service = new window.google.maps.DirectionsService();
  //   service.route(
  //     {
  //       origin: house,
  //       destination: office,
  //       travelMode: window.google.maps.TravelMode.DRIVING,
  //     },
  //     (result, status) => {

  //       if (status === "OK" && result) {
  //         setDirections(result);
  //       }
  //     }
  //   );
  // };

  // const handleSelecetedTags = (items) => {
  //   console.log("handleSelecetedTags=>", items);
  //   setTags(items)
  // }
  const onSelect = (item) => {
    console.log("onselecthouse", item);
    setSelected(item);
  };

  const handleShowInfo = (index) => {
    setShowInfo(index);
  };

  const onToggleOpen = () => {
    setIsOpen(false);
  };

  // const onMarkerRightClick = item => {
  //   console.log("onMarkerRightClick", item)

  // }

  const submitForm = async (form) => {
    console.log("form", form);
    setLoading(true);
    const { response, error } = await createPost(form);
    console.log("submitForm res", response);

    // setIsSubmitting(false)
    setLoading(false);
    if (isEmpty(error)) {
      // await getPostsGeneral()
      console.log("submitFORM ERROR", error);
      getInitialPosts();   
      setCenter(form.location.latLng);
      setOffice(form.location.latLng);
      setFormValues(intialValues);
      setFormErrors({});
      setLoading(false);
      setZoom(14);
      onClosePost();
      // setError("")
      // setIsSubmitting(false)
    } else {
      setFormErrors({});
      // setIsSubmitting(false)
      setLoading(false);
      console.log("error-->", error);
      // setError("Something went wrong")
    }
  };

  const handleChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let form = { ...formValues, files: [...attachementFiles] };
    // if (openPostBtn) {
      //// form = { ...formValues, files: [...attachementFiles],location:office };
      
      // let formByBtn = { ...formValues, files: [...attachementFiles], location: office };
      // const errors = validate(formByBtn);
      // console.log("formOpenBTN", formByBtn);
      // console.log("errors", errors);
      // if (isEmpty(errors)) {
      //   setFormValues(formByBtn);
      //   await submitForm(formByBtn);
      // }
      // return

    // }


    console.log("form", form);
    console.log("office", office);
    const errors = validate(form);

    console.log("errors", errors);
    setFormErrors(errors);
    if (isEmpty(errors)) {
      const location = await getAddress();
      form = { ...form, location };
      console.log("formUPDADATED", form);
      setFormValues(form);
      // setIsSubmitting(true);
      await submitForm(form);
    }

    // console.log("attachementFiles-->", attachementFiles)
  };
  const onClosePost = () => {
    setOpenPost(false);
    setOpenPostBtn(false);
    setFormErrors({});
  };

  const validate = (values) => {
    let errors = {};

    if (!values.find) {
      errors.find = "Cannot be blank";
    } else if (values.find.length < 4) {
      errors.find = "find must be more than 4 characters";
    }
    if (!values.location) {
      errors.location = "Cannot be blank";
    } else if (values.location.length < 4) {
      errors.location = "location must be more than 4 characters";
    }
    if (values.tags.length <= 0) {
      errors.tags = "Cannot be blank";
    }
    if (values.files.length <= 0) {
      errors.files = "Cannot be empty";
    }
    return errors;
  };

  const getAddress = async () => {
    let url;
    if (formValues.location.hasOwnProperty("latLng")) {
      const { lat, lng } = formValues.location.latLng;
      url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`;
    } else {
      const { lat, lng } = formValues.location;
      url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      const {
        formatted_address,
        geometry: { location },
        place_id,
      } = data?.results[0];
      const locationObj = {
        address: formatted_address,
        latLng: location,
        placeId: place_id,
      };
      if (isEmpty(location)) return;
      console.log(" formValues", formValues);
      return locationObj;
      // const form = { ...formValues, location: locationObj }
      // console.log("GetaddresslocationFORM", form)
      // setFormValues(form)
    } catch (e) {
      console.log("error", e);
    }
  };

  // const geocoder = new window.google.maps.Geocoder()
  // geocoder.geocode({ location:{lng:44.4444,lat:24.4242} }).then(res=>console.log("res",res.data()))

  //// const Tags = async () => {
  ////   try {
  ////     const { response, error } = await getTags();
  ////     console.log("tags", response);
  ////     if (!isEmpty(response)) {
  ////       setTags(response.data);
  ////     }
  ////   } catch (e) {
  ////     console.log("tagsError", e);
  ////   }
  //// };

  const getInitialPosts = async () => {
    // try {
    const obj = { filter: [], sort: "top" };
    //// await getPostsGeneral(obj);
    const { response, error } = await getPostsGeneral(obj)
    if (response) {
      setPosts(response)
      console.log("responseInitialPosts-->", response)
    }

    // }
    // catch (e) {
    //   console.log("errorInitialPosts-->", e)
    // }
  };
  let askLocation = true;
  useEffect(() => {
    if (askLocation) {
      //// askLocation = false;
      navigator?.geolocation.getCurrentPosition(
        ({ coords: { latitude: lat, longitude: lng } }) => {
          const location = { lat, lng };
          setOffice(location);
          setCenter(location);
          console.log("NAVIGATOR", location);
          onAddressChange(location);
          askLocation = false
        }
      );
    }
  }, []);

  useEffect(async () => {
    // if (posts.length == 0) {
    //   getInitialPosts()
    //   Tags()
    // }
    if (mapRef && mapRef.current && posts.length <= 0) {
      console.log('api initial start')
      await getInitialPosts();
      console.log('api initial end')
      //// Tags();
      //// window.addEventListener('resize',
      ////   () => mapRef.current.getViewPort().resize());
    } else if (posts.length <= 0) {
      console.log('api initial start')
      await getInitialPosts();
      console.log('api initial end')
    }
    

    console.log("POSTS", posts);
    console.log(" mapRef.current", mapRef.current);
    //// return () => {
    ////   window.removeEventListener('resize',
    ////     () => mapRef.current.getViewPort().resize());
    //// }
  }, [posts]);
  //// mapRef.current

  useEffect(() => {
    if (!isEmpty(latLng)) {
      console.log("latLng", latLng);
      setFormValues({ ...formValues, location: latLng });
      setCenter(latLng);
      setOffice(latLng);
      setSelected(latLng);
      setZoom(14);
    }
    // if(openPostBtn){
    //   setFormValues({...formValues,location:office})
    // }
   
  }, [latLng]);

  

  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmitting) {
  //     submitForm();
  //     setIsSubmitting(false)
  //   }

  // }, [formErrors]);

  const defaultOptions = {
    strokeOpacity: 0.5,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
  };

  // const closeOptions = {
  //   ...defaultOptions,
  //   zIndex: 3,
  //   fillOpacity: 0.05,
  //   strokeColor: "#8BC34A",
  //   fillColor: "#8BC34A",
  // };
  // const middleOptions = {
  //   ...defaultOptions,
  //   zIndex: 2,
  //   fillOpacity: 0.05,
  //   strokeColor: "#FBC02D",
  //   fillColor: "#FBC02D",
  // };
  // const farOptions = {
  //   ...defaultOptions,
  //   zIndex: 1,
  //   fillOpacity: 0.05,
  //   strokeColor: "#FF5252",
  //   fillColor: "#FF5252",
  // };
  // const locations = [
  //   {
  //     title: "Location 1",
  //     location: {
  //       lat: 97.3954,
  //       lng: 2.162
  //     },
  //   },
  //   {
  //     title: "Location 2",
  //     location: {
  //       lat: 12.3917,
  //       lng: 2.1649
  //     },
  //   },
  //   {
  //     title: "Location 3",
  //     location: {
  //       lat: 67.3773,
  //       lng: 2.1585
  //     },
  //   },
  //   {
  //     title: "Location 4",
  //     location: {
  //       lat: 23.3797,
  //       lng: 2.1682
  //     },
  //   },
  //   {
  //     title: "Location 5",
  //     location: {
  //       lat: 41.4055,
  //       lng: 2.1915
  //     },
  //   }
  // ];
  // const defaultCenter = {
  //   lat: 41.3851, lng: 2.1734
  // }
  // const styles = {
  //   height: "100vh",
  //   width: "100%",
  //   display: "flex",
  // };

  const GOOGLE_MAPS_API_KEY = "AIzaSyBQrRl3Pulu2F92-d4kw4NNG3ZqEKJoLgc";

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ["places",],
  });
  //// const { isLoaded } = useLoadScript({
  ////   googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  ////   libraries: ["places",],
  //// });
  const onUnmount = useCallback(function callback(map) {
    mapRef.current = null
  }, [])

  if (!isLoaded) {
    return (
      <>
        <Loader />
      </>
    );
  }
  const placeholderImg = "https://via.placeholder.com/200";

  return (
    <>
      <div className={"container"}>
        {/* <div className="controls">
          <h1>Commute?</h1>
          <Places
            setOffice={(position) => {
              setOffice(position);
              mapRef.current?.panTo(position);
            }}
          />
          {!office && <p>Enter the address of your office.</p>}
          {directions && <Distance leg={directions.routes[0].legs[0]} />}
        </div> */}
        <div className="map">
          <GoogleMap
            zoom={zoom}
            center={center}
            mapContainerClassName="map-container"
            options={options}
            onLoad={onLoad}
            onClick={onMapClick}
            ref={mapRef}
            onUnmount={onUnmount}
          >
            {/* {directions && (
              <DirectionsRenderer
                directions={directions}
                options={{
                  polylineOptions: {
                    zIndex: 50,
                    strokeColor: "#1976D2",
                    strokeWeight: 5,
                  },
                }}
              />
            )} */}

            {!isEmpty(office) && (
              <>
                <Marker
                  position={office}
                  icon={circle}
                  onClick={() => {
                    setOpenPost(true);
                  }}
                />

                {posts.length > 0 && (
                  <MarkerClusterer>
                    {(clusterer) =>
                      posts?.map((house) => (
                        <Fragment key={house._id}>
                          <Marker
                            position={house.location.latLng}
                            clusterer={clusterer}
                            onClick={() => {
                              // fetchDirections(house.location);
                              onSelect(house);
                              handleShowInfo(house._id);
                              setIsOpen(true);
                            }}
                            icon={marker}
                          // onLoad={() => console.log("clusterer", clusterer)}
                          // label={String(index)}
                          // title="hello world"
                          />

                          {/* MARKERS WINDOW */}
                          {showInfo == house._id && isOpen && (
                            <InfoWindow
                              position={selected.location.latLng}
                              clickable={true}
                              className={classes.infoBoxMarker}
                              onCloseClick={onToggleOpen}
                              // onLoad={(item)=>console.log("item",item.getPosition().lat(),item.getPosition().lng())}
                              onLoad={(item) => {
                                item.getMap(selected.location.latLng);
                              }}
                              icon={marker}
                              maxWidth={200}
                            >
                              <Card
                                sx={{ width: 200 }}
                                className={classes.cardMarker}
                              >
                                <CardMedia
                                  component="img"
                                  alt="green iguana"
                                  height="100"
                                  width="184"
                                  style={{ cursor: "pointer" }}
                                  image={
                                    house?.media.length > 0
                                      ? house?.media[0]?.mimetype.includes(
                                        "video"
                                      )
                                        ? placeholderImg
                                        : house?.media[0]?.path
                                      : placeholderImg
                                  }
                                  onClick={() => {
                                    setOpenModal(true);
                                    setData({
                                      image:
                                        house?.media.length > 0
                                          ? house?.media[0]?.path
                                          : placeholderImg,
                                      video: house?.media[0]?.mimetype.includes(
                                        "video"
                                      )
                                        ? house?.media[0]?.path
                                        : "",
                                      tags: house?.tags,
                                      find: house?.find,
                                      address: house?.location?.address,
                                    });
                                  }}
                                />
                                <CardContent
                                  sx={{ height: 80 }}
                                  className="cardContent"
                                >
                                  <h2 className="find">{house?.find}</h2>
                                  <p className="address">
                                    {house.location.address}
                                  </p>
                                  <div>
                                    {house?.tags.length > 0 &&
                                      house?.tags
                                        .slice(0, 2)
                                        .map((tag) => (
                                          <Chip
                                            label={tag}
                                            className={"chip"}
                                          />
                                        ))}
                                  </div>
                                </CardContent>
                              </Card>
                            </InfoWindow>
                          )}
                          {/*MARKER WINDOW ENDS  */}
                        </Fragment>
                      ))
                    }
                  </MarkerClusterer>
                )}

                {/* MARKERS WINDOW */}
                {/* {
                  selected.location &&
                  (
                    <InfoWindow
                      position={selected.location}
                      clickable={true}
                      className={"infoBox"}
                      onCloseClick={() => { console.log("close-->") }}
                      // onLoad={(item)=>console.log("item",item.getPosition().lat(),item.getPosition().lng())}
                      onLoad={(item) => { item.getMap(selected.location) }}
                      icon={marker}
                      maxWidth={200}


                    >
                      <Card sx={{ width: 200 }}>
                        <CardMedia
                          component="img"
                          alt="green iguana"
                          height="100"
                          width="184"
                          image={placeholderImg}
                        />
                        <CardContent sx={{ height: 80 }}>
                          <Typography variant="h6">{selected.title}</Typography>
                          <Typography variant="body2">{selected.title}</Typography>
                        </CardContent>
                      </Card>
                    </InfoWindow>
                  )
                } */}
                {/*MARKER WINDOW ENDS  */}

                {/* SHARE POST WINDOW */}
                {openPost && !isOpen && (
                  <InfoWindow
                    InfoWindow
                    position={office}
                    clickable={true}
                    className={classes.infoBoxPost}
                    // onCloseClick={() => { console.log("close-->") }}
                    onCloseClick={onClosePost}
                    maxWidth={392}
                    onLoad={(item) =>{
                      if(openPostBtn){
                        let location={lat:item.getPosition().lat(), lng:item.getPosition().lng()}
                        setFormValues({...formValues,location})
                        setOffice(location)
                      }
                      console.log("item", item.getPosition().lat(), item.getPosition().lng())

                    } }
                  // onLoad={(item) => { item.getMap(selected.location) }}
                  // icon={marker}
                  >
                    <Box
                      className={classes.postShareBox}
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { mt: 0, width: "100%" },
                      }}
                      noValidate
                      autoComplete="off"
                      onSubmit={handleSubmit}
                    >
                      <Box className="uploadBox">
                        <ImgDropMap
                          disabled={loading}
                          setAttachementFiles={(files) =>
                            setAttachementFiles(files)
                          }
                        />

                        {formErrors?.files && (
                          <span className={"error"}>{formErrors.files}</span>
                        )}
                      </Box>
                      <Box className="formBox">
                        <FormControl fullWidth className="formControl">
                          <TextField
                            autoFocus
                            margin="none"
                            name="find"
                            type="text"
                            fullWidth
                            variant="standard"
                            color="info"
                            placeholder="Title of your find?"
                            value={formValues.find}
                            onChange={(e) => {
                              handleChange(e.target.name, e.target.value);
                            }}
                            error={formErrors?.find && true}
                            className="textField"
                            disabled={loading}
                          />
                          {formErrors?.find && (
                            <span className={"error"}>{formErrors.find}</span>
                          )}
                        </FormControl>

                        <FormControl fullWidth className="formControl">
                          {/* <TagsInput
                          selectedTags={handleSelecetedTags}
                          fullWidth
                          variant="outlined"
                          id="tags"
                          name="tags"
                          placeholder="Add Tags"
                          label="tags"
                          color="info"
                        /> */}
                          <SelectMultipleTag
                            value={formValues.tags}
                            onChange={(val) => {
                              handleChange("tags", val);
                            }}
                            error={formErrors?.tags && true}
                            options={tags}
                            disabled={loading}
                            maxTag={1}
                          />

                          {formErrors?.tags && (
                            <span className={"error"}>{formErrors.tags}</span>
                          )}
                        </FormControl>
                        <Button
                          variant="contained"
                          size="small"
                          autoFocus
                          className="btnPrimary"
                          type="submit"
                          disabled={loading}
                          disableElevation
                        >
                          Add
                        </Button>
                      </Box>
                    </Box>
                  </InfoWindow>
                )}
                {/* SHARE POST WINDOW ENDS */}
              </>
            )}
          </GoogleMap>
        </div>
        {openModal && (
          <PostModal
            open={openModal}
            onClose={() => setOpenModal(false)}
            data={data}
          />
        )}
        {openMobileSearch && (
          <SearchMobileModal
            open={openMobileSearch}
            onClose={() => onOpenMobileSearch(false)}
            onAddressChangeMobile={onAddressChangeMobile}
            isGallery={false}
          />
        )}
      </div>
    </>
  );
};
export default LocationMap;
