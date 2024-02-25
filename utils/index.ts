export const convertToBase64 = (buffer: Buffer) => {
  const baseimg = `data:image/png;base64,${buffer.toString("base64")}`;
  return baseimg;
};

export const AddBase64unit = (string: string) => {
  const base64 = `data:image/png;base64,${string}`;
  return base64;
};

export const convertToBuffer = (string: string) => {
  const buffer = Buffer.from(string, "base64");
  return buffer;
};

export const discountedPrice = (p: number, d: number) => {
  const discountPrice = (p * d) / 100;
  const priceWithDiscount = p - discountPrice;
  return priceWithDiscount;
};
