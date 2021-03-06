import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import SComments from './style';
import userAvatar from './userAvatar.png';

function Comments() {
  const [commentList, setCommentList] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/comments`)
      .then(({ data }) => {
        setCommentList(data);
      })
      .catch(() => {
        setCommentList('Cette page ne contient pas encore de commentaires.');
        toast.error('Une erreur est survenue !', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      });
  }, []);

  const [nameChange, setNameChange] = useState('');
  const onNameChange = (evt) => setNameChange(evt.target.value);

  const [messageChange, setMessageChange] = useState('');
  const onMessageChange = (evt) => setMessageChange(evt.target.value);

  const dicoPages = {
    '/': 1,
    '/Accueil': 2,
    '/Personnages': 3,
    '/Jeux': 4,
  };
  const pageUrl = useLocation().pathname;

  const [form, setForm] = useState({
    nameAuthor: nameChange,
    message: messageChange,
    idPages: dicoPages[pageUrl],
    idParent: null,
  });
  useEffect(() => {
    setForm({
      ...form,
      nameAuthor: nameChange,
      message: messageChange,
    });
  }, [nameChange, messageChange]);

  useEffect(() => {
    setForm({
      ...form,
      idPages: dicoPages[pageUrl],
    });
  }, [pageUrl]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const commentData = {
      nameAuthor: form.nameAuthor,
      message: form.message,
      idPages: form.idPages,
      idParent: form.idParent,
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/comments`, commentData)
      .then(() =>
        setCommentList([
          ...commentList,
          {
            id: 0,
            message: form.message,
            nameAuthor: form.nameAuthor,
            idPages: form.idPages,
            idParent: form.idParent,
            date: Date.now(),
          },
        ])
      )
      .catch(() =>
        toast.error('Une erreur est survenue !', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        })
      );
  };

  return (
    <SComments>
      <form className="commentSection" onSubmit={handleSubmit}>
        <ul className="scroller">
          {commentList
            .filter((data) => {
              return parseInt(data.idPages, 10) === dicoPages[pageUrl];
            })
            .map((comments) => (
              <li
                key={comments.id}
                nameAuthor={comments.nameAuthor}
                message={comments.message}
                date={comments.date}
                idPages={comments.idPages}
                idParent={comments.idParent}
                className={
                  comments.idParent == null
                    ? `comment userComment`
                    : `comment answerComment`
                }
              >
                <div className="avatarContainer">
                  <img className="avatars" src={userAvatar} alt="User Avatar" />
                </div>
                <div className="infoContainer">
                  <p className="nameDisplay">{comments.nameAuthor}</p>
                  <div className="dateContainer">
                    <p className="dateDisplay">
                      {comments.date
                        ? `Publi?? le ${comments.date.split('T')[0]} ??
                      ${comments.date.split('T')[1].split('.')[0]}`
                        : ''}
                    </p>
                  </div>
                  <p className="messageDisplay">{comments.message}</p>
                </div>
              </li>
            ))}
        </ul>
        <h5>Laissez votre commentaire</h5>
        <div className="writeComment">
          <p className="inputTitle">Nom</p>
          <input
            className="messageInput"
            type="text"
            placeholder="Votre nom"
            value={nameChange}
            onChange={onNameChange}
          />
          <p className="inputTitle">Message</p>
          <input
            className="messageInput"
            type="text"
            placeholder="Votre message"
            value={messageChange}
            onChange={onMessageChange}
            required
          />
          <div className="btnDiv">
            <input className="sendBtn" type="submit" value="ENVOYER" />
          </div>
        </div>
      </form>
    </SComments>
  );
}

export default Comments;
