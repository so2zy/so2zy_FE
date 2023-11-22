import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/main/mostsell', () => {
    return HttpResponse.json([
      {
        id: 1,
        ranking: 1,
        name: '파크 하얏트 서울',
      },
      {
        id: 2,
        ranking: 2,
        name: '네스트 호텔',
      },
      {
        id: 3,
        ranking: 3,
        name: '롯데호텔 제주',
      },
      {
        id: 4,
        ranking: 4,
        name: '콘래드 서울',
      },
      {
        id: 5,
        ranking: 5,
        name: '강릉 씨마크 호텔',
      },
    ]);
  }),
  http.get('/api/main/favorite', () => {
    return HttpResponse.json([
      {
        id: 6,
        ranking: 1,
        name: '소피텔 앰배서더',
      },
      {
        id: 7,
        ranking: 2,
        name: '인터컨티넨탈 ...',
      },
      {
        id: 8,
        ranking: 3,
        name: '노보텔 앰배서더 ...',
      },
      {
        id: 9,
        ranking: 4,
        name: '파라다이스 시티',
      },
      {
        id: 10,
        ranking: 5,
        name: '속초 롯데리조트',
      },
    ]);
  }),
  http.get('/api/main/allproduct', () => {
    return HttpResponse.json([
      {
        id: 11,
        ranking: 1,
        name: '소피텔 앰배서더',
      },
      {
        id: 12,
        ranking: 2,
        name: '인터컨티넨탈 ...',
      },
      {
        id: 13,
        ranking: 3,
        name: '노보텔 앰배서더 ...',
      },
      {
        id: 14,
        ranking: 4,
        name: '파라다이스 시티',
      },
      {
        id: 15,
        ranking: 5,
        name: '속초 롯데리조트',
      },
    ]);
  }),
];
