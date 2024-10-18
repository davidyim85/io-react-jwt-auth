import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { show } from "../../services/hootService";

const HootDetails = () => {
    const { hootId } = useParams(); 
    const [hoot, setHoot] = useState(null);
    
    useEffect(() => {
        const fetchHoot = async () => {
            const hootData = await show(hootId);
            console.log('hootData', hootData);
            setHoot(hootData);
        }
        fetchHoot()
    }, [hootId])

    //loader
    if(!hoot) return <main>Loading...</main>

    return (
        <main>
            <header>
                <p>{hoot.category.toUpperCase()}</p>
                <h1>{hoot.title}</h1>
                <p>
                    {hoot.author.username} posted on {new Date(hoot.createdAt).toLocaleDateString()}
                </p>

            </header>
            <p>{hoot.text}</p>
            <section>
                <h2>Comments</h2>
            </section>
        </main>
    )
}

export default HootDetails;