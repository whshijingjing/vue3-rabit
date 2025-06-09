import instance from "@/utils/http";
export function getList() {
  return instance({
    url:'home/category/head',
    method:'get'
})
}