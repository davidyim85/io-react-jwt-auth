const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/hoots`;


export const index = async () => {
    try {
        const res = await fetch(BASE_URL, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        return res.json();
    } catch (err) {
        console.log(err)
    }
}




export const show = async (hootId) => {
    try {
        const res = await fetch(`${BASE_URL}/${hootId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        return res.json();
    } catch (err) {
        console.log(err)
    }
}

export const create = async (hootFormData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify(hootFormData),
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
        });

        return res.json();
    } catch (error) {
        console.log(error)
    }
}



export const createComment = async (hootId, commentFormData) => {
    try {
        const res = await fetch(`${BASE_URL}/${hootId}/comments`, {
            method: 'POST',
            body: JSON.stringify(commentFormData),
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
        });

        return res.json();
    } catch (error) {
        console.log(error)
    }
}



//lets create a function that delete the hoot
export const deleteHoot = async (hootId) => {
    try{
        const res = await fetch(`${BASE_URL}/${hootId}`,{
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
        })
    }catch(err) {
        console.log(err)
    }
}

//lets create a function that allows us to update the hoot
export const update = async (hootId, hootFormData)=> {
    try{
        const res = await fetch(`${BASE_URL}/${hootId}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(hootFormData)
        })

        return res.json();
    }catch(err) {
        console.log(err)
    }
}