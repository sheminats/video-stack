import { BASE_URL } from "./baseurl"
import { commonApi } from "./commonStructure"


//video add
export const addVideoApi=async(bodyData)=>{
   return await commonApi('POST',`${BASE_URL}/videos`,bodyData) 
}

//get all videos
export const getVideoApi=async()=>{      // no body data required 
    return await commonApi('GET',`${BASE_URL}/videos`,{}) 
 }

 //delete videos
 export const deleteVideosApi=async(id)=>{      
   return await commonApi('DELETE',`${BASE_URL}/videos/${id}`) 
} 

//add category
export const addCatApi=async(bodyData)=>{
   return await commonApi('POST',`${BASE_URL}/categories`,bodyData) 
}


//get all category
export const getCatApi=async()=>{      
   return await commonApi('GET',`${BASE_URL}/categories`,{}) 
}

 //delete category
 export const deleteCatApi=async(id)=>{      
   return await commonApi('DELETE',`${BASE_URL}/categories/${id}`) 
} 

//get single video
export const getVideo=async(id)=>{      
   return await commonApi('GET',`${BASE_URL}/videos/${id}`,{}) 
}

//update category
export const updateCatApi=async(id,bodyData)=>{       
   return await commonApi('PUT',`${BASE_URL}/categories/${id}`,bodyData) 
}

//add history
export const addHistoryApi=async(bodyData)=>{
   return await commonApi('POST',`${BASE_URL}/histories`,bodyData) 
}

//get all history
export const getHistoriesApi=async()=>{      
   return await commonApi('GET',`${BASE_URL}/histories`,{}) 
}

 //delete history
 export const deleteHistoryApi=async(id)=>{      
   return await commonApi('DELETE',`${BASE_URL}/histories/${id}`) 
}