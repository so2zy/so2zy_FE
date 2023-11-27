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

    return HttpResponse.json(sortedData);
  }),
];
