import axios from 'axios';

// 판매량 정렬 아직 없음, 날짜/인원수/예약가능 필터링 아직 없음
export const getSearchListData = async (
  name?: string,
  peopleCount?: number,
  isAvailable?: boolean,
  startDate?: Date | null,
  endDate?: Date | null,
  lowestPrice?: number,
  highestPrice?: number,
  orderBy?: string,
  orderCondition?: string,
  page?: number,
  size?: number,
) => {
  try {
    let url = `/v1/accommodations?`;
    // 페이지 + 사이즈
    // if (page !== undefined) url += `&page=${page}`;
    // if (size !== undefined) url += `&size=${size}`;
    // 필터링
    if (name) url += `&name=${name}`;
    if (peopleCount !== undefined) url += `&peopleCount=${peopleCount}`;
    if (startDate !== null) url += `&startDate=${startDate}`;
    if (endDate !== null) url += `&endDate=${endDate}`;
    if (lowestPrice !== undefined) url += `&lowestPrice=${lowestPrice}`;
    if (highestPrice !== undefined) url += `&highestPrice=${highestPrice}`;
    if (isAvailable !== undefined) url += `&isAvailable=${isAvailable}`;
    if (page !== undefined) url += `&page=${page}`;
    if (size !== undefined) url += `&size=${size}`;
    // 정렬
    if (orderBy !== undefined) url += `&orderBy=${orderBy}`;
    if (orderCondition !== undefined)
      url += `&orderCondition=${orderCondition}`;
    const res = await axios.get(url);
    if (res) {
      console.log('데이터 불러오기 성공!');
      console.log('getSearchListData', res.data);
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

export const getRegionListData = async (
  latitude?: number,
  longitude?: number,
  page?: number,
  size?: number,
  peopleCount?: number,
  startDate?: Date | null,
  endDate?: Date | null,
  lowestPrice?: number,
  highestPrice?: number,
  orderBy?: string,
  orderCondition?: string,
) => {
  try {
    let url = `/v1/accommodations?`;
    // 페이지 + 사이즈
    if (page !== undefined) url += `&page=${page}`;
    if (size !== undefined) url += `&size=${size}`;
    // 필터링
    if (latitude !== undefined) url += `&latitude=${latitude}`;
    if (longitude !== undefined) url += `&longitude=${longitude}`;
    if (peopleCount !== undefined) url += `&peopleCount=${peopleCount}`;
    if (startDate !== null) url += `&startDate=${startDate}`;
    if (endDate !== null) url += `&endDate=${endDate}`;
    if (lowestPrice !== undefined) url += `&lowestPrice=${lowestPrice}`;
    if (highestPrice !== undefined) url += `&highestPrice=${highestPrice}`;
    // 정렬
    if (orderBy !== undefined) url += `&orderBy=${orderBy}`;
    if (orderCondition !== undefined)
      url += `&orderCondition=${orderCondition}`;
    const res = await axios.get(url);
    if (res) {
      console.log('getRegionListData', res.data);
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
