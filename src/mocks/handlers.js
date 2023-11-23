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
  http.get('/api/main/selectregion', () => {
    return HttpResponse.json([
      {
        id: 'Seoul',
        name: '서울',
        regions: [
          '강남/역삼/삼성',
          '신사/청담/압구정',
          '서초/교대/사당',
          '잠실/송파/강동',
          '을지로/명동/중구/동대문',
          '서울역/이태원/용산',
        ],
      },
      {
        id: 'Busan',
        name: '부산',
        regions: [
          '해운대/마린시티',
          '벡스코/센텀시티',
          '송정/기장/정관',
          '광안리/경성대',
          '부산역',
          '자갈치/남포동/영도',
          '송도/다대포',
          '서면/연산/범일',
        ],
      },
      {
        id: 'GyeongGi',
        name: '경기',
        regions: [
          '오산/평택',
          '용인/동탄',
          '남양주/구리/성남/분당',
          '이천/광주/여주/하남',
          '부천/광명/시흥/안산',
          '수원/화성',
        ],
      },
      {
        id: 'InCheon',
        name: '인천',
        regions: [''],
      },
      {
        id: 'GangWon',
        name: '강원',
        regions: [''],
      },
      {
        id: 'ChongCheong',
        name: '충청',
        regions: [''],
      },
      {
        id: 'JeonRa',
        name: '전라',
        regions: [''],
      },
      {
        id: 'GyeongSang',
        name: '경상',
        regions: [''],
      },
      {
        id: 'JeJu',
        name: '제주',
        regions: [''],
      },
    ]);
  }),
];
