import { HttpInterceptorFn } from '@angular/common/http';

const publicUrls = [
  '/api/usuario/profile',
  '/api/usuario/login',
  '/api/usuario/'

];

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const isPublicUrl = publicUrls.some(url => req.url.includes(url));
  
//   if (isPublicUrl) {
//     return next(req);
//   }

  const token = localStorage.getItem('token')
  console.log(token)
  
  
  if (token) {
    console.log('entrou')
    const authReq = req.clone({
      headers: req.headers.set('Authorization',`Bearer ${token}`)    });

    console.log(authReq)
    return next(authReq);
  }
  
  return next(req);
};