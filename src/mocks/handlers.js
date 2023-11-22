import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/searchList', () => {
    return HttpResponse.json([
      {
        id: 1,
        name: '글래드 호텔',
        image: '@assets/HotelGlad.jpg',
        favorites: true,
        regularPrice: 100,
        discountPrice: 50,
      },
      {
        id: 2,
        name: '신라 호텔',
        image: '@assets/HotelShilla',
        favorites: false,
        regularPrice: 800,
        discountPrice: 330,
      },
      {
        id: 3,
        name: '베스트웨스턴 호텔',
        image: '@assets/HotelBestWestern',
        favorites: false,
        regularPrice: 700,
        discountPrice: 630,
      },
      {
        id: 4,
        name: '카푸치노 호텔',
        image: '@assets/HotelCapuccino',
        favorites: true,
        regularPrice: 1600,
        discountPrice: 330,
      },
      {
        id: 5,
        name: '뉴브 호텔',
        image: '@assets/HotelNewv',
        favorites: false,
        regularPrice: 1300,
        discountPrice: 360,
      },
      {
        id: 6,
        name: '나인 호텔',
        image: '@assets/HotelNine',
        favorites: true,
        regularPrice: 520,
        discountPrice: 530,
      },
      {
        id: 7,
        name: '크레센도 호텔',
        image: '@assets/HotelCrescendo',
        favorites: true,
        regularPrice: 600,
        discountPrice: 310,
      },
      {
        id: 8,
        name: '크레센도 호텔',
        image: '@assets/HotelCrescendo',
        favorites: true,
        regularPrice: 600,
        discountPrice: 310,
      },
      {
        id: 9,
        name: '크레센도 호텔',
        image: '@assets/HotelCrescendo',
        favorites: true,
        regularPrice: 600,
        discountPrice: 310,
      },
    ]);
  }),
  http.post('/api/messages', async ({ request }) => {
    const authToken = request.headers.get('Authorization');
    if (!authToken)
      return HttpResponse.json({ msg: 'Unauthorized' }, { status: 401 });
    const requestBody = await request.json();
    return HttpResponse.json(
      {
        content: requestBody.content,
        createdAt: new Date().toLocaleString(),
      },
      { status: 201 },
    );
  }),
];
