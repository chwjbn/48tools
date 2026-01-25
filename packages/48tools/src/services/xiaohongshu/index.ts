// @ts-expect-error
import got, { type Response as GotResponse } from 'got';

export type * from './interface';

/**
 * 获取小红书直播的livestream
 * @param { string } roomId - 直播间id
 * @param { string } [dynpath] - 目前发现不影响直播间的请求
 */
export async function requestXiaohongshuLiveStream(roomId: string, dynpath: string = 'dynpathpYJesOPX'): Promise<string> {
  const res: GotResponse<string> = await got.get(`https://www.xiaohongshu.com/livestream/${ dynpath }/${ roomId }`, {
    responseType: 'text',
    headers: {
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1'
    }
  });

  return res.body;
}