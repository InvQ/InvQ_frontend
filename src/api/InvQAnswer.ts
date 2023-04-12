interface ResponseData {
  id: number;
  question: string;
  answer: string;
  click: boolean;
}

interface Item {
  frontend: ResponseData[];
}

export const getInvQ = async (offset = '', repo = '', user = ''): Promise<Item> => {
  try {
    const url = `https://my-json-server.typicode.com/${offset}/${repo}/${user}`;
    const response = await fetch(url);

    if (!response.ok) {
      // HTTP 요청이 실패한 경우 에러 처리
      throw new Error(`HTTP error: ${response.status}`);
    }

    const responseData = (await response.json()) as Item;

    return responseData;
  } catch (error) {
    // 예외 처리
    console.error(error);
    throw error;
  }
};
