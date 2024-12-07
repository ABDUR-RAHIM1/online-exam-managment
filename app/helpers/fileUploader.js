
import { useState } from "react";

export default function useFileUploader(apiKey) {
    const [imgUrl, setImgUrl] = useState("");
    const [uploadResponse, setUploadResponse] = useState({
        message: "",
        status: 0,
    });

    const uploader = async (file) => {
        if (!file) {
            setUploadResponse({
                message: "No file selected",
                status: 400,
            });
            return;
        }

        const form = new FormData();
        form.append("image", file);

        try {
            setUploadResponse({
                message: "Uploading...",
                status: 102,
            });

            const response = await fetch("https://api.imgbb.com/1/upload?key=862850e874b9b92bba3bbba84383b4dd", {
                method: "POST",
                body: form,
            });

            if (!response.ok) {
                throw new Error("Failed to upload image");
            }

            const data = await response.json();
            const uploadedUrl = data.data.url;

            setImgUrl(uploadedUrl);
            setUploadResponse({
                message: "Image uploaded successfully",
                status: 200,
            });
        } catch (error) {
            console.error("Error uploading image:", error);
            setUploadResponse({
                message: "Failed to upload image",
                status: 500,
            });
        }
    };

    return { uploader, uploadResponse, imgUrl };
}



// export default function fileUploader() {

//     const [fileLoading, setFileLoading] = useState(false)
//     const [imgUrl, setImgUrl] = useState("");
//     const [uploadResponse, setUploadResponse] = useState({
//         message: "Uplaod Image",
//         status: 0,
//     })


//     const uploader = async (file) => {
//         const form = new FormData();
//         form.append("image", file);

//         try {
//             setFileLoading(true)
//             const [uploadResponse, setUploadResponse] = useState({
//                 message: "Uplaoding",
//                 status: 102,
//             })
//             const response = await fetch("https://api.imgbb.com/1/upload?key=862850e874b9b92bba3bbba84383b4dd", {
//                 method: "POST",
//                 body: form, // Use 'body' instead of 'data'
//             });

//             if (!response.ok) {
//                 setUploadResponse({
//                     message: "Failed to upload image",
//                     status: 500,
//                 })
//                 throw new Error("Failed to upload image");
//             }

//             const data = await response.json();
//             const imgUrl = data.data.url;
//             console.log(imgUrl)
//             setImgUrl(imgUrl)
//             setUploadResponse({
//                 message: "Image Uploaded",
//                 status: 200,
//             })
//         } catch (error) {
//             console.error("Error:", error);
//             setUploadResponse({
//                 message: "Failed to upload image",
//                 status: 500,
//             })
//         } finally {
//             setFileLoading(false)
//         }
//     };
//     return { fileLoading, uploader, uploadResponse, imgUrl }
// }
