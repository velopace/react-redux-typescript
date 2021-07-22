import { Tag } from "types/api";

export const TagUtil = {
  getKeyValueList: (tags: Tag[]) => {
    const keyValueList: string[] = [];
    tags.forEach((entry) => {
      entry.values.forEach((v) => {
        keyValueList.push(entry.key.concat(":").concat(v));
      });
    });
    return keyValueList;
  },

  getKeyList: (tags: Tag[]) => {
    const keyList: string[] = [];
    tags.forEach((entry) => {
      keyList.push(entry.key);
    });
    return keyList;
  },
};
