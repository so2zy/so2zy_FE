// maxLength 이상 보이는 메세지 말줄임표로 바꿔주는 함수
export const eclipsText = (text: string, maxLength: number) => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};
