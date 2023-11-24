import { http, HttpResponse } from 'msw';
const userList = [
  {
    email: 'example@naver.com',
    pw: '2321321a',
    userName: '채민석',
  },
  {
    email: 'example2@naver.com',
    pw: '2321321a',
    userName: '채민석',
  },
  {
    email: 'example1@naver.com',
    pw: '2321321a',
    userName: '채민석',
  },
];
export const handlers = [
  http.post('/api/emailCheck', async ({ request }) => {
    const data = await request.json();
    if (
      userList.filter((e) => {
        if (e.email === data.email) {
          return e;
        }
      }).length >= 1
    ) {
      return new HttpResponse(JSON.stringify({ isDuplicate: true }), {
        status: 200,
      });
    } else {
      return new HttpResponse(JSON.stringify({ isDuplicate: false }), {
        status: 200,
      });
    }
  }),
  http.post('/api/join', async ({ request }) => {
    const data = await request.json();

    userList.push(data);

    return new HttpResponse(JSON.stringify(data), {
      status: 200,
    });
  }),

  http.post('/posts', async ({ request }) => {
    console.log('Intercepted request to /posts:', request);

    // Rest of your handler code...

    return HttpResponse.json(newPost, { status: 201 });
  }),
  http.get('/api/main/favorate', () => {
    return HttpResponse.json();
  }),

  // 로그인 API
  http.post('/api/login', async ({ request }) => {
    const data = await request.json();

    for (const member of members) {
      if (data.email === member.email && data.password === member.password) {
        return new HttpResponse(null, {
          status: 200,
          headers: {
            'Set-Cookie': `token=1`,
          },
        });
      }
    }

    return new HttpResponse(null, { status: 404 });
  }),
];
