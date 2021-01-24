export interface IClientInfo {
  name: string;
  phone: string;
  address: string;
  entrance: string | null;
  apartment: string | null;
  intercomCode: string | null;
  floor: string | null;
}

function getStringOrPlaceholder(value: any): string {
  return value ? String(value) : "-";
}

function getStringOrNull(value: any): string | null {
  return typeof value === "string" ? value : null;
}

export function getClientInfo({
  name,
  phone,
  address,
  entrance,
  apartment,
  intercomCode,
  floor,
}: any) {
  return {
    name: getStringOrPlaceholder(name),
    phone: getStringOrPlaceholder(phone),
    address: getStringOrPlaceholder(address),

    entrance: getStringOrNull(entrance),
    apartment: getStringOrNull(apartment),
    intercomCode: getStringOrNull(intercomCode),
    floor: getStringOrNull(floor),
  };
}

export function getCombinedAddress({
  address,
  apartment,
  entrance,
  intercomCode,
  floor,
}: Omit<IClientInfo, "name" | "phone">) {
  let result = address;
  if (entrance) {
    result += `, подъезд ${entrance}`;
  }
  if (intercomCode) {
    result += `, домофон ${intercomCode}`;
  }

  if (apartment) {
    result += `, кв. ${apartment}`;
  }

  if (floor) {
    result += `, ${floor} этаж`;
  }

  return result;
}
