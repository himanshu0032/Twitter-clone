export const uploadToCloudnary = async(pics) =>{
    if(pics){
        const data = new FormData();
        data.append("file", pics)
        data.append("upload_preset","twitter")
        data.append("cloud_name","dgbbltbil")

        // const res= await fetch("https://api.cloudinary.com/v1_1/dgbbltbil/image/upload",{
        //     method:"post",
        //     body:data
        // })
        // const fileData = await res.join();
        // return fileData.url.toString();

        try {
            const res = await fetch(
              "https://api.cloudinary.com/v1_1/dgbbltbil/image/upload",
              {
                method: "POST",
                body: data,
              }
            );
            const fileData = await res.json(); // <-- Use .json() instead of .join()
            return fileData.url.toString(); // Return the image URL
          } catch (error) {
            console.error("Error uploading to Cloudinary:", error);
          }

    }else{
        console.log("No file selected for upload")
    }
}