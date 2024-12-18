import { TrangChuLayout } from '../Layout/TrangChuLayout'
import { GioHangLayout } from '../Layout/GioHangLayout'

const publicRoutes = [
  { path: '/', component: TrangChuLayout },
  { path: '/cart', component: GioHangLayout }
]
const privateRoutes = []
export { publicRoutes, privateRoutes }
