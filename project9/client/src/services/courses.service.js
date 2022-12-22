import axios from "axios";
const API_URL = "http://localhost:8080/api/courses";

class CourseService {
  post(title, description, price) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user").token);
    } else {
      token = "";
    }

    return axios.post(
      API_URL,
      { title, description, price },
      {
        headers: {
          Authorization: token, // JWT
        },
      }
    );
  }

  // 使用 student ID 來找到學生註冊的課程
  getEnrolledCourses(_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user").token);
    } else {
      token = "";
    }

    return axios.get(API_URL + "/student/" + _id, {
      headers: { Authorization: token },
    });
  }

  // 使用 instructor ID 來找到講師擁有的課程
  get(_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user").token);
    } else {
      token = "";
    }

    return axios.get(API_URL + "/instructor/" + _id, {
      headers: { Authorization: token },
    });
  }
}

export default new CourseService();
