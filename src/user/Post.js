import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./post.css";
const Post = () => {
  let [users, setUsers] = useState();
  let [posts, setPosts] = useState();
  let [Comments, setComments] = useState();
  let [newState, setNewState] = useState();
  let [newCommand, setNewCommand] = useState();
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>
      setUsers(res.data)
    );
  }, []);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((a) => a.json())
      .then((res) => setPosts(res));
  }, []);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((a) => a.json())
      .then((res) => setComments(res));
  }, []);
  console.log(Comments);
  function onDetails(i) {
    switch (i) {
      case 0:
        let newVar = posts.filter((filter) => filter.id <= 10);
        setNewState(newVar);
        break;

      case 1:
        let newVar1 = posts.filter(
          (filter) => filter.id >= 11 && filter.id <= 20
        );
        setNewState(newVar1);
        break;
      case 2:
        let newVar2 = posts.filter(
          (filter) => filter.id >= 21 && filter.id <= 30
        );
        setNewState(newVar2);
        break;
      case 3:
        let newVar3 = posts.filter(
          (filter) => filter.id >= 31 && filter.id <= 40
        );
        setNewState(newVar3);
        break;
      case 4:
        let newVar4 = posts.filter(
          (filter) => filter.id >= 41 && filter.id <= 50
        );
        setNewState(newVar4);
        break;
      case 5:
        let newVar5 = posts.filter(
          (filter) => filter.id >= 51 && filter.id <= 60
        );
        setNewState(newVar5);
        break;
      case 6:
        let newVar6 = posts.filter(
          (filter) => filter.id >= 61 && filter.id <= 70
        );
        setNewState(newVar6);
        break;
      case 7:
        let newVar7 = posts.filter(
          (filter) => filter.id >= 71 && filter.id <= 80
        );
        setNewState(newVar7);
        break;
      case 8:
        let newVar8 = posts.filter(
          (filter) => filter.id >= 81 && filter.id <= 90
        );
        setNewState(newVar8);
        break;
      case 9:
        let newVar9 = posts.filter(
          (filter) => filter.id >= 91 && filter.id <= 100
        );
        setNewState(newVar9);
        break;
      default:
    }
  }
  const onCommand = (value) => {
    switch (value) {
      case 1:
        let newVar = Comments.filter((filter) => filter.postId === 1);
        setNewCommand(newVar);
        break;
      case 2:
        let newVar2 = Comments.filter((filter) => filter.postId === 2);
        setNewCommand(newVar2);
        break;
      case 3:
        let newVar3 = Comments.filter((filter) => filter.postId === 3);
        setNewCommand(newVar3);
        break;
      case 4:
        let newVar4 = Comments.filter((filter) => filter.postId === 4);
        setNewCommand(newVar4);
        break;
      case 5:
        let newVar5 = Comments.filter((filter) => filter.postId === 5);
        setNewCommand(newVar5);
        break;
      case 6:
        let newVar6 = Comments.filter((filter) => filter.postId === 6);
        setNewCommand(newVar6);
        break;
      case 7:
        let newVar7 = Comments.filter((filter) => filter.postId === 7);
        setNewCommand(newVar7);
        break;
      case 8:
        let newVar8 = Comments.filter((filter) => filter.postId === 8);
        setNewCommand(newVar8);
        break;
      case 9:
        let newVar9 = Comments.filter((filter) => filter.postId === 9);
        setNewCommand(newVar9);
        break;
      case 10:
        let newVar10 = Comments.filter((filter) => filter.postId === 10);
        setNewCommand(newVar10);
        break;

      default:
    }
  };
  console.log(newCommand);

  return (
    <div className="d-flex ms-5">
      <div>
        <h2>users</h2>
        {users &&
          users.map((a, i) => {
            return (
              <div className="m-3" key={i}>
                <button
                  className="btn btn-success p-2"
                  onClick={() => onDetails(i)}
                >
                  user{a.id}
                </button>
              </div>
            );
          })}
      </div>
      <div className="ms-5">
        <h2>Posts</h2>
        {newState &&
          newState.map((item, index) => {
            return (
              <div key={index}>
                <button
                  className="btn btn-danger m-2 p-2"
                  onClick={() => onCommand(item.id)}
                >
                  post{item.id}
                </button>
              </div>
            );
          })}
      </div>
      <div className="ms-5">
        <h2>Comments</h2>
        {newCommand &&
          newCommand.map((item, index) => {
            return (
              <div key={index}>
                <p className="text-primary card w-25 h-25 p-3 shadow comments ">
                  <span className="text-dark">comment {item.id}:</span>
                  {item.body}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Post;
