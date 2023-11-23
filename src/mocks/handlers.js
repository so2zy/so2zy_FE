import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/main/mostsell', () => {
    return HttpResponse.json([
      {
        id: 1,
        ranking: 1,
        name: '파크 하얏트 서울',
        price: '59,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 2,
        ranking: 2,
        name: '네스트 호텔',
        price: '129,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 3,
        ranking: 3,
        name: '롯데호텔 제주',
        price: '1,129,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 4,
        ranking: 4,
        name: '콘래드 서울',
        price: '149,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 5,
        ranking: 5,
        name: '강릉 씨마크 호텔',
        price: '529,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 11,
        ranking: 11,
        name: '파크 하얏트 서울',
        price: '59,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 12,
        ranking: 12,
        name: '네스트 호텔',
        price: '129,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 13,
        ranking: 13,
        name: '롯데호텔 제주',
        price: '1,129,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 14,
        ranking: 14,
        name: '콘래드 서울',
        price: '149,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 15,
        ranking: 15,
        name: '강릉 씨마크 호텔',
        price: '529,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
    ]);
  }),
  http.get('/api/main/favorite', () => {
    return HttpResponse.json([
      {
        id: 6,
        ranking: 1,
        name: '소피텔 앰배서더',
        price: '529,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 7,
        ranking: 2,
        name: '인터컨티넨탈 ...',
        price: '529,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 8,
        ranking: 3,
        name: '노보텔 앰배서더 ...',
        price: '529,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 9,
        ranking: 4,
        name: '파라다이스 시티',
        price: '529,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 10,
        ranking: 5,
        name: '속초 롯데리조트',
        price: '529,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 11,
        ranking: 11,
        name: '파크 하얏트 서울',
        price: '59,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 12,
        ranking: 12,
        name: '네스트 호텔',
        price: '129,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 13,
        ranking: 13,
        name: '롯데호텔 제주',
        price: '1,129,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 14,
        ranking: 14,
        name: '콘래드 서울',
        price: '149,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 15,
        ranking: 15,
        name: '강릉 씨마크 호텔',
        price: '529,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
    ]);
  }),
  http.get('/api/main/allproduct', () => {
    return HttpResponse.json([
      {
        id: 11,
        ranking: 1,
        name: '소피텔 앰배서더',
        price: '529,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      {
        id: 12,
        ranking: 2,
        name: '인터컨티넨탈 ...',
        price: '529,000원',
        saleprice: '329,000원',
        image: 'https://i.ibb.co/868XYvH/1.jpg',
      },
      // {
      //   id: 13,
      //   ranking: 3,
      //   name: '노보텔 앰배서더 ...',
      //   price: '529,000원',
      // },
      // {
      //   id: 14,
      //   ranking: 4,
      //   name: '파라다이스 시티',
      //   price: '529,000원',
      // },
      // {
      //   id: 15,
      //   ranking: 5,
      //   name: '속초 롯데리조트',
      //   price: '529,000원',
      // },
    ]);
  }),
];
