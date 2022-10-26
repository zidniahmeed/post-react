import Layout from "../../components/Layout"
import Navbar from "../../components/Navbar"
import Button from "../../components/Button"
import { useState } from "react"
import styles from "../../styles/Post.module.css"
import { useNavigate, useParams } from "react-router-dom"
import { urlMain } from "../../lib/config"
import { useEffect } from "react"

export default function EditPost() {
    const [fields, setFields] = useState({
        title: "",
        description: ""
    })

    const navigate = useNavigate()

    const { id } = useParams()

    function handlerFields(e) {
        const name = e.target.name

        setFields({
            ...fields,
            [name]: e.target.value
        })
    }

    useEffect(() => {
        fetch(`${urlMain}/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setFields(data.blog)
        })
    },[])

    function handlerEdit(e) {
        e.preventDefault()


        fetch(`${urlMain}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(fields)
        })
        .then(() => {
            navigate("/post")
        })
    }

    return (
    <Layout title={"Create post"}>
        <Navbar />
        <section className={styles.section}>
            <h1>Create post</h1>
            <form onSubmit={handlerEdit.bind(this)}>
                <label htmlFor='title'>Title</label>
                <input value={fields.title} name='title' onChange={handlerFields.bind(this)} className='border-2' id='title' placeholder='Input title' />
                <label>Content</label>
                <textarea value={fields.description} name='description' onChange={handlerFields.bind(this)} className='border-2' placeholder='Input content' />
                <Button type="submit">Post</Button>
            </form>
        </section>
    </Layout>
    )
} 