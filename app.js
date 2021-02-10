const order = {};
const address = '';
const index = 0;

function resizeString(
  str,
  size = 16,
) {
  if (str.length <= size) {
    return str;
  }
  return `${String(str).split('').splice(0, size).join('')}`;
}

function postcodeFormat(postCodeToFormat) {
  let splited = postCodeToFormat.replace(/-/g, '').split('');
  splited = splited.reduce((accumulator, item, splitedIndex) => {
    accumulator = [...accumulator, splitedIndex === 4 ? '-' : '', item];
    return accumulator;
  }, []);

  return splited.join('');
}

const printHtml = $('.print-html').html(`
<div class="qr-code-row">
  <div id="qrcode"></div>

  <div class="qr-code-info">
    <div class="info-line">
      <span class="iata">${order.iata}</span>
      <img src="https://bko.staging.uello.com.br/img/logo-uello-preto.png" alt="Uello">
    </div>
    <div class="info-line">
      <span class="postcode">${postcodeFormat(order.postcode)}</span>
      <span class="postcode">ROTA</span>
    </div>
    <div class="info-line">
      <span class="partner-name">${resizeString(order.partnerName)}</span>
      <span class="postcode route-info">${order.route || 'N/D'}</span>
    </div>
  </div>
  </div>
  <div class="order-info">
  <div>
    <p class="order-details">${order.customerName}</p>
    <p class="order-details">${address}</p>
  </div>
  <div>
    <p class="order-details">Criacao: ${order.createdAt}</p>
    <div class="info-line sensive">
      <span>VOL ${index + 1}/${order.volumes}</span>
      <span>NF ${order.invoiceNumber}</span>
    </div>
  </div>
  </div>
  <div class="barcode-area">
  <svg id="barcode"></svg>
</div>
`);
