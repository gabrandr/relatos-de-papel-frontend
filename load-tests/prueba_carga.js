import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 100 },
    { duration: '1m', target: 300 }, // Carga segura para ejecución local nativa
    { duration: '30s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'], // Requisito: < 2 segundos
    http_req_failed: ['rate<0.01'],    // Menos del 1% de error
  },
};

export default function () {
  const url = 'http://localhost:8762/api/books';
  
  const payload = JSON.stringify({
    "targetMethod": "GET",
    "queryParams": {},
    "body": null
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    'status es 200': (r) => r.status === 200,
    'tiempo < 2s': (r) => r.timings.duration < 2000,
  });

  sleep(3); 
}