import React from 'react'
import { useState } from 'react'
import Button from '../../components/Button'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import { urlMain } from '../../lib/config'
import styles from "../../styles/Post.module.css"
import { useNavigate } from 'react-router-dom' 

export default function CreatePost() {
    const [fields, setFields] = useState({
        title: "",
        content: ""
    })

    const navigate = useNavigate()

    function handlerFields(e) {
        const name = e.target.name
        
        setFields({
            ...fields,
            [name]: e.target.value
        })
    }

    const data = {
        title: fields.title,
        description: fields.content
    }

    function handlerSubmit(e) {
        e.preventDefault()

        fetch(urlMain, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(data)
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
            <form onSubmit={handlerSubmit.bind(this)}>
                <label htmlFor='title'>Title</label>
                <input name='title' onChange={handlerFields.bind(this)} className='border-2' id='title' placeholder='Input title' />
                <label>Content</label>
                <textarea name='content' onChange={handlerFields.bind(this)} className='border-2' placeholder='Input content' />
                <Button type="submit">Post</Button>
            </form>
        </section>
    </Layout>
  )
}
