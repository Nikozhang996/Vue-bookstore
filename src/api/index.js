import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

axios.interceptors.response.use(res => {
  return res.data;
});

/*导出模块，返回一个Promise对象*/

// 返回轮播图
export const getSliders = () => {
  return axios.get('./sliders');
};

// 返回热门图书
export const getHotBooks = () => {
  return axios.get('./hot');
};

// 返回所有图书
export const getAllBooks = () => {
  return axios.get('./book');
};

export const getAll = () => {
  return axios.all([getSliders(), getHotBooks()]);
};

// 删除某一本图书
export const removeBook = (id) => {
  return axios.delete(`./book?id=${id}`);
};

// 获取某一本书
export const findOneBook = (id) => {
  return axios.get(`./book?id=${id}`);
};

// 修改图书
export const updataBook = (id, data) => {
  return axios.put(`./book?id=${id}`, data);
};

// 添加图书
export const addBook = (data) => {
  return axios.post(`./book`,data);
};

// 返回分页
export const pagination = (offset) => {
  return axios.get(`/page?offset=${offset}`);
};
