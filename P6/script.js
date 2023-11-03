function total()
{
    const select = document.getElementById('emameun')
    const selectopt = select.options[select.selectedIndex].text
    const selectvalue = select.value
    const n = document.getElementById('total').value
    const kupon = document.getElementById('coupon').value
    let total = parseInt(selectvalue) * parseInt(n)


    if(kupon === 'ManukDadali')
    {
        total *= 0.8
    }
    
    document.getElementById('item').innerText = selectopt
    document.getElementById('quantity').innerText = selectvalue
    document.getElementById('couponitem').innerText = kupon
    document.getElementById('totalall').innerText = 'Rp. ' + total.toLocaleString('id-ID')
}