import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(`/accommodations/:id`, ({ params }) => {
    const { id } = params;
    console.log(`handler test ${id}`);

    return HttpResponse.json({
      id: 1, //백엔드에 추가요청(v1)
      accommodationName: '소피텔 앰배서더 서울',
      latitude: 37.51379512401881,
      longitude: 127.10615978152588,
      addressCode: '서울특별시 송파구 잠실로 209',
      phoneNumber: '02-2092-6000',
      accommodationImageList: [
        {
          id: 1,
          url: 'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg', //이미지 url
        },
      ],
      roomInfoList: [
        {
          id: 1,
          type: 'deluxe',
          price: 240000,
          capacity: 2,
          maxCapacity: 3,
          checkIn: '13:00',
          checkOut: '18:00',
          stock: 4,
          url: 'https://yaimg.yanolja.com/v5/2023/11/14/10/640/65534a484efab3.93517110.jpg',
        },
        {
          id: 2,
          type: 'premium',
          price: 340000,
          capacity: 2,
          maxCapacity: 4,
          checkIn: '13:00',
          checkOut: '18:00',
          stock: 0,
          url: 'https://yaimg.yanolja.com/v5/2023/11/14/10/640/65534a484efab3.93517110.jpg',
        },
        {
          id: 3,
          type: 'twin',
          price: 240000,
          capacity: 2,
          maxCapacity: 2,
          checkIn: '13:00',
          checkOut: '18:00',
          stock: 5,
          url: 'https://yaimg.yanolja.com/v5/2023/11/14/10/640/65534a484efab3.93517110.jpg',
        },
      ],
    });
  }),
  http.get('/api/main/mostsell', () => {
    return HttpResponse.json([
      {
        id: 1,
        ranking: 1,
        name: '파크 하얏트 서울',
        price: '59,000원',
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        like: false,
      },
      {
        id: 2,
        ranking: 2,
        name: '네스트 호텔',
        price: '129,000원',
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        like: false,
      },
      {
        id: 3,
        ranking: 3,
        name: '롯데호텔 제주',
        price: '1,129,000원',
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        like: false,
      },
      {
        id: 4,
        ranking: 4,
        name: '콘래드 서울',
        price: '149,000원',
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        like: false,
      },
      {
        id: 5,
        ranking: 5,
        name: '강릉 씨마크 호텔',
        price: '529,000원',
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        like: false,
      },
      {
        id: 11,
        ranking: 11,
        name: '파크 하얏트 서울',
        price: '59,000원',
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        like: true,
      },
      {
        id: 12,
        ranking: 12,
        name: '네스트 호텔',
        price: '129,000원',
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        like: false,
      },
      {
        id: 13,
        ranking: 13,
        name: '롯데호텔 제주',
        price: '1,129,000원',
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        like: true,
      },
      {
        id: 14,
        ranking: 14,
        name: '콘래드 서울',
        price: '149,000원',
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        like: false,
      },
      {
        id: 15,
        ranking: 15,
        name: '강릉 씨마크 호텔',
        price: '529,000원',
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        like: true,
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
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        like: true,
      },
      {
        id: 7,
        ranking: 2,
        name: '인터컨티넨탈 ...',
        price: '529,000원',
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        like: false,
      },
      {
        id: 8,
        ranking: 3,
        name: '노보텔 앰배서더 가나다 라 마바사',
        price: '529,000원',
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        like: true,
      },
      {
        id: 9,
        ranking: 4,
        name: '파라다이스 시티',
        price: '529,000원',
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        like: false,
      },
      {
        id: 10,
        ranking: 5,
        name: '속초 롯데리조트',
        price: '529,000원',
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        like: true,
      },
      {
        id: 11,
        ranking: 11,
        name: '파크 하얏트 서울',
        price: '59,000원',
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        like: true,
      },
      {
        id: 12,
        ranking: 12,
        name: '네스트 호텔',
        price: '129,000원',
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        like: false,
      },
      {
        id: 13,
        ranking: 13,
        name: '롯데호텔 제주',
        price: '1,129,000원',
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        like: true,
      },
      {
        id: 14,
        ranking: 14,
        name: '콘래드 서울',
        price: '149,000원',
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        like: false,
      },
      {
        id: 15,
        ranking: 15,
        name: '강릉 씨마크 호텔',
        price: '529,000원',
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        like: true,
      },
    ]);
  }),
  // // 무한스크롤 사용 할 목업 데이터
  http.get('/api/main/allitems', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page')) || 0;
    const itemsPerPage = 2;
    const data = [
      {
        id: 110,
        ranking: 1,
        name: '소피텔',
        price: '529,000원',
        latitude: 30.0,
        longitude: 25.0,
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        islast: false,
      },
      {
        id: 120,
        ranking: 2,
        name: '터컨티넨탈 ...',
        price: '529,000원',
        saleprice: '329,000원',
        latitude: 30.0,
        longitude: 25.0,
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        islast: false,
      },
      {
        id: 130,
        ranking: 3,
        name: '노보텔...',
        price: '529,000원',
        latitude: 30.0,
        longitude: 25.0,
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        islast: false,
      },
      {
        id: 140,
        ranking: 4,
        name: '시티',
        price: '529,000원',
        latitude: 30.0,
        longitude: 25.0,
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        islast: false,
      },
      {
        id: 150,
        ranking: 5,
        name: '속초',
        price: '529,000원',
        latitude: 30.0,
        longitude: 25.0,
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        islast: true,
      },
      {
        id: 160,
        ranking: 5,
        name: '강릉1',
        price: '529,000원',
        latitude: 30.0,
        longitude: 25.0,
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        islast: true,
      },
      {
        id: 161,
        ranking: 5,
        name: '강릉2',
        price: '529,000원',
        latitude: 30.0,
        longitude: 25.0,
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        islast: true,
      },
      {
        id: 162,
        ranking: 5,
        name: '강릉3',
        price: '529,000원',
        latitude: 30.0,
        longitude: 25.0,
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        islast: true,
      },
      {
        id: 163,
        ranking: 5,
        name: '강릉4',
        price: '529,000원',
        latitude: 30.0,
        longitude: 25.0,
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        islast: true,
      },
      {
        id: 164,
        ranking: 5,
        name: '강릉5',
        price: '529,000원',
        latitude: 30.0,
        longitude: 25.0,
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        islast: true,
      },
      {
        id: 165,
        ranking: 5,
        name: '강릉6',
        price: '529,000원',
        latitude: 30.0,
        longitude: 25.0,
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        islast: true,
      },
      {
        id: 166,
        ranking: 5,
        name: '강릉7',
        price: '529,000원',
        latitude: 30.0,
        longitude: 25.0,
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        islast: true,
      },
      {
        id: 167,
        ranking: 5,
        name: '강릉8',
        price: '529,000원',
        latitude: 30.0,
        longitude: 25.0,
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        islast: true,
      },
      {
        id: 168,
        ranking: 5,
        name: '강릉9',
        price: '529,000원',
        latitude: 30.0,
        longitude: 25.0,
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        islast: true,
      },
      {
        id: 169,
        ranking: 5,
        name: '강릉10',
        price: '529,000원',
        latitude: 30.0,
        longitude: 25.0,
        accommodationImageUrl:
          'https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg',
        islast: true,
      },
    ];
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const responseData = data.slice(startIndex, endIndex);

    return HttpResponse.json({
      message: '성공',
      data: responseData,
    });
  }),

  http.get('/api/searchList', () => {
    return HttpResponse.json([
      {
        id: 1,
        name: '글래드 호텔',
        image: '@assets/HotelGlad.jpg',
        favorites: false,
        regularPrice: 300000,
        discountPrice: 150000,
        salesCount: 38,
        isAvailable: true,
        peopleCount: 6,
      },
      {
        id: 2,
        name: '신라 호텔',
        image: '@assets/HotelShilla',
        favorites: false,
        regularPrice: 280000,
        discountPrice: 170000,
        salesCount: 15,
        isAvailable: true,
        peopleCount: 1,
      },
      {
        id: 3,
        name: '베스트웨스턴 호텔',
        image: '@assets/HotelBestWestern',
        favorites: false,
        regularPrice: 700000,
        discountPrice: 630000,
        salesCount: 89,
        isAvailable: false,
        peopleCount: 5,
      },
      {
        id: 4,
        name: '카푸치노 호텔',
        image: '@assets/HotelCapuccino',
        favorites: true,
        regularPrice: 610000,
        discountPrice: 410000,
        salesCount: 44,
        isAvailable: true,
        peopleCount: 4,
      },
      {
        id: 5,
        name: '뉴브 호텔',
        image: '@assets/HotelNewv',
        favorites: false,
        regularPrice: 930000,
        discountPrice: 840000,
        salesCount: 61,
        isAvailable: false,
        peopleCount: 3,
      },
      {
        id: 6,
        name: '나인 호텔',
        image: '@assets/HotelNine',
        favorites: true,
        regularPrice: 450000,
        discountPrice: 290000,
        salesCount: 3,
        isAvailable: false,
        peopleCount: 5,
      },
      {
        id: 7,
        name: '크레센도 호텔',
        image: '@assets/HotelCrescendo',
        favorites: true,
        regularPrice: 830000,
        discountPrice: 550000,
        salesCount: 50,
        isAvailable: true,
        peopleCount: 1,
      },
      {
        id: 8,
        name: '크레센도 호텔',
        image: '@assets/HotelCrescendo',
        favorites: true,
        regularPrice: 160000,
        discountPrice: 70000,
        salesCount: 97,
        isAvailable: true,
        peopleCount: 11,
      },
      {
        id: 9,
        name: '크레센도 호텔',
        image: '@assets/HotelCrescendo',
        favorites: true,
        regularPrice: 170000,
        discountPrice: 120000,
        salesCount: 72,
        isAvailable: true,
        peopleCount: 6,
      },
    ]);
  }),

  http.get('/v1/accommodations', ({ request }) => {
    const url = new URL(request.url);
    const orderBy = url.searchParams.get('orderBy') || 'asc';
    const orderCondition = url.searchParams.get('orderCondition') || 'price';
    const peopleCountFilter = parseInt(url.searchParams.get('peopleCount'));
    const lowestPriceFilter = parseInt(url.searchParams.get('lowestPrice'));
    const highestPriceFilter = parseInt(url.searchParams.get('highestPrice'));
    const isAvailableFilter = url.searchParams.get('isAvailable');
    const nameFilter = url.searchParams.get('name');
    const page = parseInt(url.searchParams.get('page'));
    const size = parseInt(url.searchParams.get('size'));

    const data = [
      {
        id: 1,
        name: '글래드 호텔',
        image: '@assets/HotelGlad.jpg',
        favorites: false,
        regularPrice: 300000,
        discountPrice: 150000,
        salesCount: 38,
        isAvailable: true,
        peopleCount: 6,
        startDate: '2023-02-14T12:23:40.456',
        endDate: '2024-05-27T16:15:33.210',
      },
      {
        id: 2,
        name: '신라 호텔',
        image: '@assets/HotelShilla',
        favorites: false,
        regularPrice: 280000,
        discountPrice: 170000,
        salesCount: 15,
        isAvailable: true,
        peopleCount: 1,
        startDate: '2015-07-21T10:05:58.743',
        endDate: '2016-12-03T07:28:10.987',
      },
      {
        id: 3,
        name: '베스트웨스턴 호텔',
        image: '@assets/HotelBestWestern',
        favorites: false,
        regularPrice: 700000,
        discountPrice: 630000,
        salesCount: 89,
        isAvailable: false,
        peopleCount: 5,
        startDate: '2019-06-08T03:09:18.654',
        endDate: '2020-08-25T09:12:45.567',
      },
      {
        id: 4,
        name: '카푸치노 호텔',
        image: '@assets/HotelCapuccino',
        favorites: true,
        regularPrice: 610000,
        discountPrice: 410000,
        salesCount: 44,
        isAvailable: true,
        peopleCount: 4,
        startDate: '2017-09-30T18:55:36.789',
        endDate: '2018-04-17T21:30:15.892',
      },
      {
        id: 5,
        name: '뉴브 호텔',
        image: '@assets/HotelNewv',
        favorites: false,
        regularPrice: 930000,
        discountPrice: 840000,
        salesCount: 61,
        isAvailable: false,
        peopleCount: 3,
        startDate: '2021-10-19T23:40:55.321',
        endDate: '2022-11-05T14:47:22.123',
      },
      {
        id: 6,
        name: 'A 호텔',
        image: '@assets/HotelNewv',
        favorites: false,
        regularPrice: 520000,
        discountPrice: 440000,
        salesCount: 1,
        isAvailable: false,
        peopleCount: 2,
        startDate: '2021-10-19T23:40:55.321',
        endDate: '2022-11-05T14:47:22.123',
      },
      {
        id: 7,
        name: 'B 호텔',
        image: '@assets/HotelNewv',
        favorites: true,
        regularPrice: 310000,
        discountPrice: 270000,
        salesCount: 11,
        isAvailable: true,
        peopleCount: 7,
        startDate: '2021-10-19T23:40:55.321',
        endDate: '2022-11-05T14:47:22.123',
      },
      {
        id: 8,
        name: 'C 호텔',
        image: '@assets/HotelNewv',
        favorites: false,
        regularPrice: 330000,
        discountPrice: 220000,
        salesCount: 12,
        isAvailable: true,
        peopleCount: 3,
        startDate: '2021-10-19T23:40:55.321',
        endDate: '2022-11-05T14:47:22.123',
      },
      {
        id: 9,
        name: 'D 호텔',
        image: '@assets/HotelNewv',
        favorites: false,
        regularPrice: 130000,
        discountPrice: 40000,
        salesCount: 6,
        isAvailable: false,
        peopleCount: 2,
        startDate: '2021-10-19T23:40:55.321',
        endDate: '2022-11-05T14:47:22.123',
      },
    ];

    const filteredData = data.filter(
      (item) =>
        item.peopleCount >= peopleCountFilter &&
        (nameFilter ? item.name.includes(nameFilter) : true) &&
        (!isNaN(lowestPriceFilter) && !isNaN(highestPriceFilter)
          ? item.discountPrice >= lowestPriceFilter &&
            item.discountPrice <= highestPriceFilter
          : true) &&
        (isAvailableFilter === 'true' ? item.isAvailable : true),
    );

    const sortedData = filteredData.sort((a, b) => {
      let valueA, valueB;

      if (orderCondition === 'price') {
        valueA = a.discountPrice;
        valueB = b.discountPrice;
      } else if (orderCondition === 'salesCount') {
        valueA = a.salesCount;
        valueB = b.salesCount;
      }
      return orderBy === 'asc' ? valueA - valueB : valueB - valueA;
    });

    const totalItems = sortedData.length;
    const totalPages = Math.ceil(totalItems / size);
    const paginatedData = sortedData.slice((page - 1) * size, page * size);

    return HttpResponse.json({
      data: paginatedData,
      totalPages,
      currentPage: page,
      size: size,
    });
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
          '종로/인사동',
          '홍대/합정/마포/서대문',
          '영등포역',
          '구로/신도림/금천',
          '김포공항/염창/강서',
          '건대입구/성수/왕십리',
          '성북/강북/노원/도봉',
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
