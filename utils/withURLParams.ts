import {
  DecodedValueMap,
  encodeQueryParams,
  QueryParamConfigMap,
} from "serialize-query-params";
import { stringify } from "query-string";

export const withURLParams = <QPCMap extends QueryParamConfigMap>(
  url: string,
  config: QPCMap,
  params: Partial<DecodedValueMap<QPCMap>>
) => {
  const encoded = encodeQueryParams(config, params);
  const urlParams = stringify(encoded);
  return `${url}?${urlParams}`;
};
