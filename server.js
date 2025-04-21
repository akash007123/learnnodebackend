const http = require('http');
const bootstrapCDN = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">`;

const server = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    
  res.setHeader('Content-Type', 'text/html');

  let htmlContent = '';

  if (req.url === '/') {
    res.statusCode = 200;
    htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Home</title>
        ${bootstrapCDN}
      </head>
      <body class="container mt-5 text-center">
        <h1 class="text-primary">Welcome to the Home Page</h1>
        <img class="img-fluid" src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"/>
        <p class="mt-5">This is the root route.</p>
      </body>
      </html>
    `;
  } else if (req.url === '/about') {
    res.statusCode = 200;
    htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>About</title>
        ${bootstrapCDN}
      </head>
      <body class="">

      <div class="container mt-5">
      <div class="row">
      <div class="col-md-5">
      <h1 class="text-success">About Us</h1>
        <p>This page contains information about us. Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. <br/>
        This page contains information about us. Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. <br/>
        Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.</p></div>
      <div class="col-md-7">
      <img src="https://media.istockphoto.com/id/1400739452/vector/about-us-web-header-design-icon-interconnected-symbol-of-company-profile-corporate.jpg?s=612x612&w=0&k=20&c=-zgp-xnEqh8zBEjNajlPZmDF5PXuqlXVUu7RjBf_UGU=" class="w-100"/>
      </div>
      </div>
      </div>
      </body>
      </html>
    `;
  } else if (req.url === '/contact') {
    res.statusCode = 200;
    htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Contact</title>
        ${bootstrapCDN}
      </head>
      <body class="container mt-5">

       <div class="container mt-5">
      <div class="row">
      <div class="col-md-5">
      <h1 class="text-info">Contact Us</h1>
        <p>Feel free to reach out to us via email or phone.</p></div>
      <div class="col-md-7">
      <form>
        <div class="mb-3">
        <input class="form-control form-control-lg" type="text" placeholder="Name " required>
        </div>
        <div class="mb-3">
        <input class="form-control form-control-lg" type="email" placeholder="Email " required>
        </div>
        <div class="mb-3">
        <input class="form-control form-control-lg" type="number" placeholder="Mobile " required>
        </div>
        <div class="mb-3">
        <textarea class="form-control form-control-lg" id="exampleFormControlTextarea1" rows="3"  placeholder="Message ........ " required></textarea>
        </div>
        <div class="mb-3">
        <button type="submit" class="btn btn-primary w-100">Submit</button>
        </div>
      </form>
      </div>
      </div>
      </div>
        <
      </body>
      </html>
    `;
  } else {
    res.statusCode = 404;
    htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>404</title>
        ${bootstrapCDN}
      </head>
      <body class="container mt-5 text-center ">
        <h1 class="text-danger mt-5">404 Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </body>
      </html>
    `;
  }

  res.end(htmlContent);

  
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
