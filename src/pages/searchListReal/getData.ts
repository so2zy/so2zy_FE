import axios from 'axios';

export const getFilterAndSortData = async (
  name?: string,
  page?: number,
  size?: number,
  likeCount?: number,
  lowestPrice?: number,
  highestPrice?: number,
  orderBy?: string,
  orderCondition?: string,
) => {
  try {
    let url = `/v1/accommodations?`;
    if (page !== undefined) url += `&page=${page}`;
    if (size !== undefined) url += `&size=${size}`;
    if (name !== undefined) url += `&name=${name}`;
    if (likeCount !== undefined) url += `&likeCount=${likeCount}`;
    if (lowestPrice !== undefined) url += `&lowestPrice=${lowestPrice}`;
    if (highestPrice !== undefined) url += `&highestPrice=${highestPrice}`;
    if (orderBy !== undefined) url += `&orderBy=${orderBy}`;
    if (orderCondition !== undefined)
      url += `&orderCondition=${orderCondition}`;
    const res = await axios.get(url);
    if (res) {
      console.log('getSortList', res.data);
      return res.data;
    } else {
      console.log('데이터 불러오기 실패');
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};
