const URL = 'http://localhost:3000/'

export const headers = {
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmNkYmQ5ZDc4YzM5NmYwMDllZGJmYyIsImlhdCI6MTYzNDUyNDE1MCwiZXhwIjoxNjM0NjEwNTUwfQ.G6gteTF_Vq5CvXDSDQzU_3Lf-CciHvrQfYiPE00aVWQ`
}

//Cadastro e autenticação
export const AUTH = `${URL}/auth/authenticate`
export const REGISTER = `${URL}/user/register`

//Event
export const EVENT = `${URL}/event`

//user
export const USER = `${URL}/user`
//participant

export const PARTICIPANT = `${URL}/participant`
