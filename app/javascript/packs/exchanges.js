document.addEventListener('turbolinks:load', function(){
    document.getElementById('amount').addEventListener('change', function(event) {      
      let source_currency = document.getElementById('source_currency').value
      let target_currency = document.getElementById('target_currency').value
      let amount = document.getElementById('amount').value
      let params = {source_currency: source_currency
        , target_currency: target_currency
        , amount: amount }
      
      let query = Object.keys(params)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');  
      let url = '/convert?' + query;

      fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => document.getElementById('result').value = data.value);
    })

    document.getElementById('inverter').addEventListener('click', function(event) {
      console.log('inverter')
      let source_currency = document.getElementById('source_currency').value
      let target_currency = document.getElementById('target_currency').value

      document.getElementById('source_currency').value = target_currency
      document.getElementById('target_currency').value = source_currency
    })

  })