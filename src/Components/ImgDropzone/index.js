import React, { useCallback, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { makeStyles } from "@mui/styles";

import { formatBytes, formatLongNames } from '../../Utils/constants';

// * Icons
import { BsCameraVideo, BsImage, BsFileEarmark } from 'react-icons/bs'
import { FiXCircle } from 'react-icons/fi'
import { IconButton } from '@mui/material';
import upload from "../../Assets/Gallery/upload.svg";
import isEmpty from '../../Utils/isEmpty';
import useAuth from '../../Hooks/useAuth';

const useStyles = makeStyles((theme) => ({
    uploadWrapper: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "100%",
        flex: 0,
        margin: "1rem 0",
        "& .uploadImg": {
            cursor: "pointer"
        },
        "& .labelUpload": {
            color: "#ADADAD",
            fontSize: "1rem"
        }
    },
    fileWrapper: {
        display: "flex",
        width: "92%",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "100%",
        flex: 1,
        "& .labelUpload": {
            color: "#ADADAD",
            fontSize: "1rem"
        },
        "& .fileBox": {
            "display": "flex",
            "flexDirection": "column",
            "width": "100%",
            gap: '10px'
        },
        "&.overflowBox": {
            "maxHeight": "200px",
            "overflow": "hidden",
            "overflowY": "scroll",
        },
    },

    attachementItemPreview: {
        // padding: "10px 15px",
        /* box-shadow: 0px 8px 16px rgb(0 0 0 / 5"%)", */
        // width: "92%",
        // overflow: "auto",
        display: "inline-flex",
        position: "relative",
        alignItems: "center",
        border: "1px solid #efefef",
        borderRadius: "8px",
        //// marginBottom: "10px",
        justifyContent: "flex-start",
        width: "100%",
        overflow: "hidden",
        gap: '.5rem',

        "& img": {
            borderRadius: "5px",
            width: "50px",
            height: "50px",
        },
        "& .bytes": {
            fontSize: "10px",
            // width: "20%",
            color: "red"
        },
        "& .name": {
            // width: "50%",
            fontSize: "10px",
        },
        "& .remove-button": {
            position: "absolute",
            top: '0px',
            right: '-2px'
            // right: '5px'
            // top: '5px',
        },

    },
    dropdownZone: {
        border: "1px dashed",
        padding: '20px',
        textAlign: 'center',
        borderRadius: "8px",

    }
}))
export default function MyDropzone({ setAttachementFiles, editAttachmentItems, setEditAttachementFiles }) {
    const classes = useStyles();
    const [fileRead, setFileRead] = useState([])
    const [myFiles, setMyFiles] = useState([])
    const [myFilesFromProps, setMyFilesFromProps] = useState([])
    const [error, setError] = useState("")
    const { percentCompleted } = useAuth()

    useEffect(() => {
        removeAll()
    }, [])

    // useEffect(() => {
    //     let filesArr = []

    //     editAttachmentItems?.forEach(item => {
    //         console.log("ITEM EDIT LESSON ATTACHMENT", item)
    //         const name = item.indexOf("https://da-prep.s3.ap-south-1.amazonaws.com/images/") !== -1 ? item.replace("https://da-prep.s3.ap-south-1.amazonaws.com/images/", "") : ""
    //         // const type = name.includes('.jpg') ? "image/jpeg" : name.includes('.png') ? "image/jpeg" : "text/plain"
    //         const type = name.includes('.jpg') ? "image/jpeg" : name.includes('.png') ? "image/png" : "image/jpeg"
    //         const fileObject = new File([item], item, { type, path: name })
    //         filesArr.push(fileObject)
    //     })

    //     setMyFilesFromProps(filesArr)

    // }, [editAttachmentItems])

    // useEffect(() => {
    //     setEditAttachementFiles?.(myFilesFromProps)
    // }, [myFilesFromProps])

    const onDrop = useCallback((acceptedFiles) => {
        if (myFiles.length <= 0) {
            setAttachementFiles([...myFiles, ...acceptedFiles])
            setMyFiles([...myFiles, ...acceptedFiles])

        }
        else {
            const isDuplicate = myFiles.find(item => (item.path === acceptedFiles[0].path))
            if (isEmpty(isDuplicate)) {
                setAttachementFiles([...myFiles, ...acceptedFiles])
                setMyFiles([...myFiles, ...acceptedFiles])
            }
        }
        console.log("useCallback attachment files", acceptedFiles)
        console.log("useCallback myFiles", myFiles)
        // console.log("myFIles", myFiles)
        // console.log("acceptedFiles", acceptedFiles)
        // const updatedArr=[...myFiles, ...acceptedFiles]
        // updatedArr.forEach((file) => {

        //     const reader = new FileReader()
        //     reader.onabort = () => console.log('file reading was aborted')
        //     reader.onerror = () => console.log('file reading has failed')
        //     reader.onload = () => {
        //         // Do whatever you want with the file contents
        //         const binaryStr = reader.result
        //         // setAttachementFiles(binaryStr)
        //         setFileRead(binaryStr)
        //         // setFileRead([...fileRead, binaryStr])
        //         // console.log("READER RESULT", reader)
        //     }
        //     // reader.onloadstart = () => {
        //     //     console.log("LOAD START")
        //     // }
        //     // reader.onloadend = () => {
        //     //     console.log("LOAD END")
        //     // }
        //     // reader.onprogress = () => {
        //     //     console.log("ON PROGRESS")
        //     // }
        //     // reader.onerror = (e) => {
        //     //     console.log("ON ERROR")
        //     //     setError(e)
        //     // }
        //     reader.readAsDataURL(file)
        //     // reader.readAsArrayBuffer(file)
        // })

    }, [myFiles])

    const { acceptedFiles, fileRejections, getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/jpeg,image/png,video/mp4,video/webm,video/ogg', maxSize: 15000000, maxFiles: 5 })


    const removeAll = () => {
        setMyFiles([])
        setAttachementFiles([])
    }

    const removeFileItem = (fileIndex, isEditableArrayItem) => () => {

        if (isEditableArrayItem) {
            const newFilesEditableFiles = [...myFilesFromProps]
            newFilesEditableFiles.splice(fileIndex, 1)
            setMyFilesFromProps(newFilesEditableFiles)
        }
        else {
            const newFiles = [...myFiles]
            newFiles.splice(fileIndex, 1)
            setMyFiles(newFiles)
            setAttachementFiles(newFiles)
        }
    }
    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
        <span className='bytes' key={file.path}>
            {/* {formatLongNames(file.path, true)} - {formatBytes(file.size)} bytes */}
            {formatLongNames(file.path, true)} - {formatBytes(file.size)} is larger than 15MB

            {/* <ul>
                {errors.map(e => (
                    // <li key={e.code} className='bytes'>{e.message}</li>
                    <li className='bytes'>File is larger than 15MB {formatBytes(file.size)}</li>
                ))}
            </ul> */}
        </span>
    ));

    const files = myFiles?.map((file, i) => (
        <div className={classes.attachementItemPreview} key={file.path}>
            {file.type?.includes('image') &&
                <img src={URL.createObjectURL(file)} />}

            {file.type?.includes('video') && <BsCameraVideo size={30} />
            }

            {/* {(file.type?.includes('application') || file.type?.includes('text')) && <BsFileEarmark size={30} />} */}

            <IconButton onClick={removeFileItem(i)} className="remove-button" size="small"><FiXCircle /></IconButton>
            <p className='name'>{formatLongNames(file.path ? file.path : file.name)}</p>
            <span className='bytes'>{formatBytes(file.size)}</span>
        </div>
    ));

    // console.log("myFilesFromProps", myFilesFromProps)
    // const editableFiles = myFilesFromProps?.map((file, i) => (
    //     <div className={classes.attachementItemPreview} key={i}>
    //         {file.type?.includes('image') &&
    //             <img src={file.name} />}

    //         {file.type?.includes('video') && <BsCameraVideo size={30} />
    //         }

    //         {/* {(file.type?.includes('application') || file.type?.includes('text')) && <BsFileEarmark size={30} />} */}

    //         <IconButton onClick={removeFileItem(i, true)} className="remove-button" size="small"><FiXCircle /></IconButton>
    //         <p className='name'>{formatLongNames(file.name, true)}</p>
    //         <span className='bytes'>{formatBytes(file.size)}</span>
    //     </div>
    // ));

    // const attachementItemsFiles = attachementItems.map((file, i) => (
    //     <div className={classes.attachementItemPreview} key={i}>
    //         {/* {file.type.includes('image') && */}
    //         <img width="30" height="30" src={file} />
    //         {/* } */}


    //         <IconButton onClick={removeFileItem(i)} className="remove-button" size="small"><FiXCircle /></IconButton>
    //         {/* <p>{formatLongNames(file.path)}</p>
    //         <span>{formatBytes(file.size)}</span> */}
    //     </div>
    // ))
    return (
        <>
            <div {...getRootProps()} className={classes.uploadWrapper}>
                <input {...getInputProps()} />
                {/* <p className={classes.dropdownZone}>Drag 'n' drop some files here, or click to select files</p> */}
                <img src={upload} alt="upload" className='uploadImg' />
                <span className="labelUpload">Upload Media</span>
            </div>
            {myFiles.length > 0 &&
                <div className={`${classes.fileWrapper} ${myFiles.length > 3 ? "overflowBox" : ""}`}>
                    <>
                        <div className={"fileBox"}>{files}</div>
                        {/* <div>{percentCompleted}%</div> */}
                    </>
                    {/* {
                        editAttachmentItems &&
                        <div>{editableFiles}</div>
                    } */}
                </div>
            }
            <>{fileRejections.length > 0 && fileRejectionItems}</>
        </>
    )
}