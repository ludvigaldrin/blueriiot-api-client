class BlueToken {
  identityId;
  token;
  credentials;
  constructor(identity_id, token, credentials) {
    this.identityId = identity_id;
    this.token = token;
    this.credentials = credentials;
  }
}

class BlueCredentials {
  access_key;
  secret_key;
  session_token;
  expiration;

  constructor(access_key, secret_key, session_token, expiration) {
    this.access_key = access_key;
    this.secret_key = secret_key;
    this.session_token = session_token;
    this.expiration = expiration;
  }
}
module.exports = { BlueToken, BlueCredentials }

/**

{
    identity_id: 'eu-west-1:5312083c-259f-4478-a4c7-30796f6e2d48',
    token: 'eyJraWQiOiJldS13ZXN0LTExIiwidHlwIjoiSldTIiwiYWxnIjoiUlM1MTIifQ.eyJzdWIiOiJldS13ZXN0LTE6NTMxMjA4M2MtMjU5Zi00NDc4LWE0YzctMzA3OTZmNmUyZDQ4IiwiYXVkIjoiZXUtd2VzdC0xOmE0OWQ5YThjLWMzM2UtNDc4NC05ODY4LWU4ZDY0N2MyM2JlNyIsImFtciI6WyJhdXRoZW50aWNhdGVkIiwiY29tLnJpaW90bGFicyIsImNvbS5yaWlvdGxhYnM6ZXUtd2VzdC0xOmE0OWQ5YThjLWMzM2UtNDc4NC05ODY4LWU4ZDY0N2MyM2JlNzpsdWR2aWcuYWxkcmluQGdtYWlsLmNvbSJdLCJpc3MiOiJodHRwczovL2NvZ25pdG8taWRlbnRpdHkuYW1hem9uYXdzLmNvbSIsImV4cCI6MTYyMzA0Mjc5NSwiaWF0IjoxNjIzMDQxODk1fQ.mDsX3xFdXNJMiofsxjh7U3PrOuxdfBjSYPbCRW-Au4U1W92_1lCAvSml2nUKmVWTxttUvxdQoYWjrfVKEoFID5XBmbNqzuLFXpYFsP77CEG2aUHaT9VtkLf27JhHiF-f2IwuOhaWWxmKyqBcOMKhozTK6CraWb6FPOqj1buIi2xgvoSwD6pHVwI0boYWUPbL1igxxLVuitfXT-CCuZISSW6arOa4TfmTveVdWYuY6ngDOvYVk6rNL22oa10M2SDC5LoKCJJ19u86osxdXmhDi1nh569jRK-6Us9Z_YTO-KUGaA8zSJ6BC7sCnc1H9mQd1_pJJq8K43osIwt_w4n2wQ',
    credentials: {
      access_key: 'ASIAWBBD3XVOEBWV2R7K',
      secret_key: 'UxoieawxaujY6U3CRr2CsRqKpi/g7Y+qTfD4dGfM',
      session_token: 'IQoJb3JpZ2luX2VjEJ3//////////wEaCWV1LXdlc3QtMSJGMEQCIFJ+aTfa6aY3hCuRD2lnfriZ3+8sxxwhI2YaANSgkm4lAiAxPW7KJSbcLcj2k99y/HU0OUa4Q5d0jHTa8mbHI1iQGSqEBAhWEAIaDDQxNDUzOTU2MjMzMiIM6423qgbXYYuy4L62KuEDcIqqGlWjaZ+VLHoIXjjPnwlZB5CjUx1Rm5yvU1zQ4l0yDXN5d7IIswYcI0TNCLSWiy1ETqNfohFd8ivGWsW0aUimHEXlVb8emd2gkBma8isk4c64Q2EJScW3iZe11MAOASB+FzeOFnoxAZ+M+XXFoBsiflYFcWvY6rrv7c3PffbACg+hPoF9eisUzvNXD35Tw5nr/7IeAaZjIlMssmXQr3fQdRfrpIVF6jPfhqTEnwcOpypFqigLxXroQudurSayMSRwomeTco1LALPn7UxcpMsLmoR//CW8OxnQBWTu8k7BdUdDp0IeP7tKUPxjBcx0jyNej775Oi6O0eD0r8eEKoaWGLmTueabJLbLBXhpCk473eHhRgpyILEwLDTyj7wYg7GIi49gLdX1Zozqvo2nzdQ+hxjVNw4QHseMz1biTCQkxuHhTuK/hCFyqwyXVqMEfjOPPXp6Ux6FyF4iurW9WMkp/MmIie5KdfW/3mDyqLcOc464XE0El/g8Tip6oSPQ5tUtcxfD0ImeXN33TUB9rC5s5/9PQXvbecQ/GHgDLQwVOLPByfFoZNh4FzDRBhrMMqDOwpqTO6/f8ixXtJvmd05oXpYooDWK/pTzzBqJeNsw0XTqaF1gVIira1iZx+CkPTDnzvaFBjqFAgMnVoCAVktJhHLYCcRF1ikwnoc1qkVUKTAbQ75lORlSGgrCS1GHEvibPSrmEhDJV2kC286joFTzcYp9501aifux9wT8UzCZ6BFkyecwBH3NkmMQ8FmNcsHQ1p3UxOyXiW9V92FO3avzkt/6w+daUaiW67YOAWxhLMsV9pKiS9x69JNrm+fHdgXzks32EoP+6haNSwPZlrAQtXFYWR5q+4sMMVVCAYjEQhYmlajwf9wuUolt1V6nnOfw9QCCwXHcZckuvjZcOqQntsWLx9mWtZg0IwbewflKG+MEUWKaDk40V5CjIA9HX1Ia8q5aDLYH/5eoEHpe5XQ/EOm2s9WbGBGDT6U/mg==',
      expiration: '2021-06-07T05:58:15.000Z'
    }
  }

 */