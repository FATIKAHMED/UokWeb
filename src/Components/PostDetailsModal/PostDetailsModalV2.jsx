// * lib
import React, { useEffect } from 'react'
// @mui
import { styled } from '@mui/material/styles'
import { useTheme } from '@mui/styles'
import {
  Button,
  Dialog,
  DialogContent,
  Avatar,
  Chip,
  Grid,
  Stack,
  IconButton,
  Typography,
  useMediaQuery,
} from '@mui/material'

// * Components
import { IoCloseCircleOutline } from 'react-icons/io5'
import marker from '../../Assets/Gallery/marker.png'
import isEmpty from '../../Utils/isEmpty'
import useAuth from '../../Hooks/useAuth'
import avatar from '../../Assets/Gallery/avatar2.png'

const COLORS = {
  blue: '#0F0B82',
  red: '#FC0954',
  white: '#fff',
}

const ChipStyle = styled(Chip)(({ theme }) => ({
  background: COLORS.red,
  marginRight: '10px',
  broderRadius: '16px',
  color: COLORS.white,
  height: '20px',
  marginBottom: '5px',
  '& span': {
    fontSize: '12px',
    fontFamily: theme.typography.Poppins,
  },
}))

const ButtonStyle = styled(Button)(({ theme }) => ({
  color: COLORS.blue,
  background: COLORS.white,
  borderColor: COLORS.blue,
  fontWeight: 'bold',
  padding: '2px 20px',
  '&:hover': {
    background: COLORS.blue,
    color: COLORS.white,
    borderColor: COLORS.white,
  },
}))

export default function PostDetailsModalV2({
  open,
  onClose,
  postDetails,
  onLikeDislike,
}) {
  const [openSocialModal, setOpenSocialModal] = React.useState(false)
  const [post, setPost] = React.useState(null)
  const { posts } = useAuth()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

  const imagesVideos =
    post?.media.length > 0
      ? post?.media.map((image) =>
          image.mimetype.includes('video')
            ? { type: 'video', src: image.path }
            : { type: 'image', src: image.path },
        )
      : [
          post?.media[0].mimetype.includes('video')
            ? { type: 'video', src: post?.media[0].path }
            : { type: 'image', src: post?.media[0].path },
        ]

  const handleSocialShare = (post) => {
    setOpenSocialModal(true)
  }

  useEffect(() => {
    if (posts) {
      let index = posts.findIndex((post) => post._id == postDetails._id)
      if (index != -1) {
        setPost(posts[index])
      }
    }
  }, [posts])

  return (
    <Dialog
      fullWidth={true}
      fullScreen={isMobile}
      maxWidth="md"
      open={open}
      onClose={onClose}
      scroll="body"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogContent
        sx={{
          padding: 0,
        }}
      >
        {/* ~DESKTOP */}
        {isDesktop && (
          <FollowWrapperDesktopView post={post} imagesVideos={imagesVideos} />
        )}

        {/* ~MOBILE */}
        {isMobile && (
          <FollowWrapperMobileView post={post} imagesVideos={imagesVideos} />
        )}
      </DialogContent>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: COLORS.white,
          //   color: (theme) => theme.palette.grey[500],
        }}
      >
        <IoCloseCircleOutline />
      </IconButton>
    </Dialog>
  )
}

const FollowWrapperDesktopView = ({ post, imagesVideos }) => {
  return (
    <>
      <div>
        {/* <Carousel images={imagesVideos} /> */}
        <img
          src={imagesVideos[0].src}
          style={{
            position: 'relative',
            height: '100%',
            maxHeight: '30rem',
            width: '100%',
            objectFit: ' cover',
          }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid
          container
          py={1}
          px={2}
          pb={3}
          sx={{
            background: COLORS.white,
            position: 'absolute',
            bottom: '30px',
            // minWidth: '40vw',
            // maxWidth: '50vw',
            width: '70%',
          }}
        >
          <Grid
            item
            sm={8}
            md={8}
            lg={8}
            pb={1}
            sx={{
              borderBottom: '1px solid #e0e0e0',
            }}
          >
            <Grid container>
              <Grid
                item
                sm={2}
                md={2}
                lg={2}
                sx={{ display: 'flex', justifyContent: 'center', marginTop: 1 }}
              >
                <Avatar
                  src={!isEmpty(post) ? post?.createdBy?.name : avatar}
                  sx={{ height: '40px', width: '40px' }}
                />
              </Grid>
              <Grid item sm={10} lg={10} pt={1}>
                <Typography variant="h6" fontWeight="bold">
                  {post?.createdBy?.name}
                </Typography>
                <Stack spacing={1}>
                  <Stack
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      mt: 2,
                    }}
                  >
                    <img
                      src={marker}
                      alt="marker"
                      height={'20px'}
                      width="20px"
                    />
                    <Typography
                      ml={0.5}
                      variant="subtitle2"
                      color={COLORS.blue}
                      fontWeight="bold"
                    >
                      {post?.location?.address}
                    </Typography>
                  </Stack>
                  <Stack
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    {post?.tags.length > 0 &&
                      post?.tags.map((tag) => <ChipStyle label={tag} />)}
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sm={4}
            md={4}
            lg={4}
            pt={2}
            sx={{
              borderBottom: '1px solid #e0e0e0',
            }}
          >
            <Stack direction="row" justifyContent="end" alignItems="start">
              <ButtonStyle variant="outlined">Follow</ButtonStyle>
            </Stack>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

const FollowWrapperMobileView = ({ post, imagesVideos }) => {
  return (
    <>
      <Stack sx={{ height: '75vh' }}>
        {/* <Carousel images={imagesVideos} /> */}
        <img
          src={imagesVideos[0].src}
          style={{
            position: 'relative',
            height: '100%',
            maxHeight: '30rem',
            width: '100%',
            objectFit: ' cover',
          }}
        />
      </Stack>

      <Stack sx={{ height: '25vh' }}>
        <Stack>
          <Grid container mt={3}>
            <Grid
              item
              xs={2}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'start',
              }}
            >
              <Avatar
                src={!isEmpty(post) ? post?.createdBy?.name : avatar}
                sx={{ height: '36px', width: '36px' }}
              />
            </Grid>
            <Grid item xs={7}>
              <Typography variant="h6" fontWeight="bold">
                {post?.createdBy?.name}
              </Typography>
              <Stack spacing={1}>
                <Stack
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <img src={marker} alt="marker" height={'20px'} width="20px" />
                  <Typography
                    ml={0.5}
                    variant="subtitle2"
                    color={COLORS.blue}
                    fontWeight="bold"
                  >
                    {post?.location?.address}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack mr={3}>
                <ButtonStyle sx={{ px: 3 }} variant="outlined">
                  Follow
                </ButtonStyle>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
            mt: 2,
            mx: 2,
          }}
        >
          {post?.tags.length > 0 &&
            post?.tags.map((tag) => <ChipStyle label={tag} />)}
        </Stack>
      </Stack>
    </>
  )
}
