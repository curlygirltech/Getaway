import api from './api-helper'

//index
export const getAllHomes = async () => {
  const resp = await api.get('/homes')
  return resp.data
}
  
  
  //show
  export const getOneHome= async (id) => {
    const resp = await api.get(`/homes/${id}`);
    return resp.data
    
  }
  //create
  export const postHome = async (homeData) => {
    const resp = await api.post('/homes', { home: homeData })
    return resp.data
  }
  //update
  export const putHome = async (id, homeData) => {
    const resp = await api.put(`/homes/${id}`, { home: homeData })
    return resp.data
  }
  //delete
  export const deleteHome = async (id) => {
    const resp = await api.delete(`/homes/${id}`)
    return resp
  }
  
  
  

