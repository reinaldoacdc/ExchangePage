document.addEventListener('turbolinks:load', function(){
    document.getElementById('amount').addEventListener('change', function(event) {      
      let source_currency = document.getElementById('source_currency').value
      let target_currency = document.getElementById('target_currency').value
      let amount = document.getElementById('amount').value

       
      let url = new URL("http:localhost:3000/convert")
      let params = {source_currency: source_currency
        , target_currency: target_currency
        , amount: amount }
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  
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