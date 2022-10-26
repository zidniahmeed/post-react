import { useEffect, useState} from 'react'
import styles from "../../styles/Post.module.css"
import { urlMain } from "../../lib/config"
import Navbar from '../../components/Navbar'
import Card from "../../components/Card"
import Layout from '../../components/Layout'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

export default function Posts() {
    const [post, setPost] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [removeId, setRemoveId] = useState()

    function handleRemove(id) {
        setLoading(true)
        fetch(`${urlMain}/${id}`, {
            method: "DELETE"
        })
        .then((res) => {
            res.json()
            setLoading(false)
        })
    }

    async function getData() {        
        const request = await fetch(urlMain, {
            method: "GET"
        })
        const res = await request.json()
        const data = await res.blogs
            setPost(data)
            setLoading(false)
    }

    useEffect(() => {
        getData()
        handleRemove(removeId)
    }, [removeId])

    return (
        <Layout title={"Post"}>
            <Navbar />
            <section className={styles.section}>
                <h1>Post Page</h1>
                <Link to={"/post/create"}>Create post</Link>
                {loading ? <h1>Loading...</h1> :
                    <div className={styles.wrap}> 
                        {post.map((data) => (
                            <Card key={data.id} title={data.title} body={data.description} button={
                            <>
                                <Button className='bg-red-500' onClick={() => setRemoveId(data.id)}>Delete
                                </Button> 
                                <Button>
                                    <Link to={`/post/edit/${data.id}`}>Edit</Link>
                                </Button>
                            </>
                            } />
                        ))}
                    </div>
                }
            </section>
        </Layout>
    )
}
