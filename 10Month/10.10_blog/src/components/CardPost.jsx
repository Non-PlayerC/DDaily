/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Card, Button } from 'react-bootstrap/';
import API from '../utils/API';

function CardPost(props) {
    const [posts, setPosts] = useState([])
    const getPost = async () => {
        const posts = await API.get("posts");
        console.log(posts, "-- posts");
        if (posts.data && posts.data.posts && posts.data.posts.length) {
            setPosts(posts.data.posts)
        }
    }
    useEffect(() => {
        getPost()
    }, []);

    return (
        <>
            {
                posts && posts.map((postData) => {
                    return (
                        < Col key={postData.id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{postData.title}</Card.Title>
                                    <Card.Text>
                                        {postData.body}
                                    </Card.Text>
                                    <Button variant="primary">Read More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
        </>
    )
}
export default CardPost;