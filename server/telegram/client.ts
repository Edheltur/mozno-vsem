const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

type SendMessageOptions = { disableLinkPreview?: boolean };

export class TelegramClient {
  private readonly token: string;
  private readonly baseApiUrl: string;

  constructor(token: string) {
    this.token = token;
    this.baseApiUrl = "https://api.telegram.org";
  }

  private buildURL(path: string) {
    return `${this.baseApiUrl}/bot${this.token}/${path}`;
  }

  private async request<T>(path: string, data?: object): Promise<T> {
    const response = await fetch(this.buildURL(path), {
      method: "POST",
      body: JSON.stringify(data),
      headers,
    });
    if (response.ok) {
      return response.json();
    }

    throw new Error(response.statusText);
  }

  sendMessage(
    chatId: string,
    markdownText: string,
    { disableLinkPreview }: SendMessageOptions = { disableLinkPreview: false }
  ) {
    return this.request("sendMessage", {
      chat_id: chatId,
      text: markdownText,
      parse_mode: "markdown",
      disable_web_page_preview: disableLinkPreview,
    });
  }
}
