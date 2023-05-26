import { BACKEND_URL } from './CONSTANT';

const POST = (body = {}, callbackFn) => {
  const formdata = new FormData();
  Object.entries(body).map(([key, val]) => {
    formdata.append(key, val);
  });
  fetch(BACKEND_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data; ',
    },
    body: formdata,
  })
    .then((response) => response.json())
    .then((responseJson) => {
      callbackFn(responseJson);
    })
    .catch((err) => {
      console.log(err);
    });
};
const uploadFile = (doc, setStatus, onError) => {
  const fileToUpload = doc;
  setStatus({
    id: fileToUpload?.index,
    progress: 0,
    is_done: false,
  });
  // 1. initialize request
  const xhr = new XMLHttpRequest();
  // 2. open request
  xhr.open('POST', BACKEND_URL);
  // 3. set up callback for request
  xhr.onload = () => {
    const response = JSON.parse(xhr.response);
    response.index = doc.index;
    setStatus({
      id: fileToUpload?.index,
      progress: 100,
      is_done: true,
      response,
    });
    // ... do something with the successful response
  };
  // 4. catch for request error
  xhr.onerror = (e) => {
    console.log(e);
    onError(e);
  };
  // 4. catch for request timeout
  xhr.ontimeout = (e) => {
    onError(e);
  };
  // 4. create formData to upload
  const formData = new FormData();

  formData.append('type', 'MY_UPLOAD');
  formData.append('name', 'Image Upload');
  formData.append('file_attachment', fileToUpload);
  formData.append('room_id', doc.room_id || 1);
  // 6. upload the request
  xhr.send(formData);
  // 7. track upload progress
  if (xhr.upload) {
    // track the upload progress
    xhr.upload.onprogress = ({ total, loaded }) => {
      const uploadProgress = loaded / total;
      let a = uploadProgress.toFixed(2);
      a = parseFloat(a) * 100;
      const responseObject = {
        id: fileToUpload?.index,
        progress: a,
        is_done: false,
      };
      setStatus(responseObject);
    };
  }
};
const uploadprofile = (doc, setStatus, onError) => {
  const fileToUpload = doc;
  setStatus({
    progress: 0,
    is_done: false,
  });
  // 1. initialize request
  const xhr = new XMLHttpRequest();
  // 2. open request
  xhr.open('POST', BACKEND_URL);
  // 3. set up callback for request
  xhr.onload = () => {
    const response = JSON.parse(xhr.response);
    setStatus({
      progress: 100,
      is_done: true,
      response,
    });
    // ... do something with the successful response
  };
  // 4. catch for request error
  xhr.onerror = (e) => {
    console.log(e);
    onError(e);
  };
  // 4. catch for request timeout
  xhr.ontimeout = (e) => {
    onError(e);
  };
  // 4. create formData to upload
  const formData = new FormData();

  formData.append('type', 'MY_UPLOAD');
  formData.append('name', 'Image Upload');
  formData.append('file_attachment', fileToUpload);
  formData.append('user_id', doc.user_id);
  formData.append('username', doc.username);
  formData.append('user_desc', doc.user_desc);
  // 6. upload the request
  xhr.send(formData);
  // 7. track upload progress
  if (xhr.upload) {
    // track the upload progress
    xhr.upload.onprogress = ({ total, loaded }) => {
      const uploadProgress = loaded / total;
      let a = uploadProgress.toFixed(2);
      a = parseFloat(a) * 100;
      const responseObject = {
        progress: a,
        is_done: false,
      };
      setStatus(responseObject);
    };
  }
};
export { POST, uploadFile , uploadprofile };
