import fetch from "node-fetch";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export class TelegramClient {
  private readonly token: string;
  private readonly timeoutMs: number;
  private readonly baseApiUrl: string;

  constructor(token: string, timeoutMs: number) {
    this.token = token;
    this.timeoutMs = timeoutMs;
    this.baseApiUrl = "https://api.telegram.org";
  }

  private buildURL(path: string) {
    return `${this.baseApiUrl}/bot${this.token}/${path}`;
  }

  private async request<T>(path: string, data?: object): Promise<T> {
    const response = await fetch(this.buildURL(path), {
      method: "POST",
      timeout: this.timeoutMs,
      body: JSON.stringify(data),
      headers,
    });
    if (response.ok) {
      return response.json();
    }

    throw new Error(response.statusText);
  }

  sendMessage(chatId: string, markdownText: string) {
    return this.request("sendMessage", {
      chat_id: chatId,
      text: markdownText,
      parse_mode: "markdown",
    });
  }
}
