describe('E2E Android Testing', function(){
    it('Completing order process', async function(){
        
        // Landing page

        const declineNotif = await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]');
        await declineNotif.waitForDisplayed({timeout: 10000});
        await declineNotif.click();
        const skipBtn = await $('//android.widget.TextView[@resource-id="edts.klik.android:id/bvSkip"]');
        await skipBtn.click();

        // Login
        const loginBtn = await $('//android.widget.TextView[@resource-id="edts.klik.android:id/btnChange"]');
        await loginBtn.waitForDisplayed({timeout: 10000});
        await loginBtn.click();
        const nextLoginBtn = await $('//android.view.ViewGroup[@resource-id="edts.klik.android:id/clLogin"]');
        await nextLoginBtn.click();

        // Input login credential
        const phoneField = await $('//android.widget.EditText[@text="Masukkan nomor handphone atau email"]');
        await phoneField.waitForDisplayed({timeout: 10000});
        await phoneField.setValue('085955090230');
        const continueBtn = await $('//android.widget.TextView[@resource-id="edts.klik.android:id/bvLogin"]');
        await continueBtn.click();
        const passField = await $('//android.widget.EditText[@text="Kata Sandi"]');
        await passField.setValue('@test123');
        const submitBtn = await $('//android.widget.TextView[@resource-id="edts.klik.android:id/bvLogin"]');
        await submitBtn.click();

        // Change Address
        const changeAddress = await $('//android.widget.TextView[@resource-id="edts.klik.android:id/btnChange"]');
        await changeAddress.waitForDisplayed({timeout: 10000});
        const closePopup = await $('//android.widget.FrameLayout[@resource-id="edts.klik.android:id/ivCancel"]');
        await closePopup.click();
        await changeAddress.click();
        const selectAddress = await $('//android.widget.TextView[@resource-id="edts.klik.android:id/tvLabel"]');
        await selectAddress.click();

        // Search & select product
        const searchBtn = await $('//android.widget.TextView[@resource-id="edts.klik.android:id/tvPlaceholder"]');
        await searchBtn.click();
        const searchField = await $('//android.widget.EditText[@text="Cari di Klik Indomaret"]');
        await searchField.click();
        await searchField.setValue('Indomie goreng');
        const searchResult = await $('//android.widget.TextView[@resource-id="edts.klik.android:id/textView" and @text="Indomie goreng"]');
        await searchResult.waitForDisplayed({timeout: 5000});
        await searchResult.click();
        
        // View product details
        const viewProduct = await $('//android.widget.TextView[@resource-id="edts.klik.android:id/tvTitle" and @text="Indomie Mi Instan Goreng Jumbo Special 129G"]');
        await viewProduct.waitForDisplayed({timeout: 5000});
        await viewProduct.click();
        const prodTitle = await $('//android.widget.TextView[@resource-id="edts.klik.android:id/tvName"]');
        await prodTitle.waitForDisplayed({timeout: 10000});
        await expect(prodTitle).toHaveText('Indomie Mi Instan Goreng Jumbo Special 129G');
        const prodDetails = await $('//android.widget.TextView[@resource-id="edts.klik.android:id/tvContent"]');
        await expect(prodDetails).toHaveText('Mi goreng dengan ukuran yang besar dan rasa yang lezat, terbuat dari bahan berkualitas dan rempah rempah terbaik.');

        // Add to cart
        const addToCart = await $('//android.widget.TextView[@resource-id="edts.klik.android:id/bvCart"]');
        await addToCart.click();
        const openCart = await $('(//android.widget.FrameLayout[@resource-id="edts.klik.android:id/flCart"])[1]');
        await openCart.click();

        // Select Shipping method
        const selectShipping = await $('(//androidx.cardview.widget.CardView[@resource-id="edts.klik.android:id/materialCardView"])[1]/android.view.ViewGroup');
        await selectShipping.click();
        const selectMethod = await $('//androidx.recyclerview.widget.RecyclerView[@resource-id="edts.klik.android:id/recyclerVew"]/android.view.ViewGroup[1]');
        await selectMethod.waitForDisplayed({timeout: 5000});  
        await selectMethod.click();
        const confirmBtn = await $('//android.widget.TextView[@resource-id="edts.klik.android:id/bvSubmit"]');
        await confirmBtn.click();

        // Validate price calculation
        const calculatePrice = await $('//android.widget.TextView[@resource-id="edts.klik.android:id/tvTotal"]');
        await calculatePrice.click();
        const itemGross = await $('//android.widget.TextView[@resource-id="edts.klik.android:id/tvGross"]');
        const itemGrossValue = parseFloat((await (itemGross).getText()).replace('Rp ', '').replace('.', ','));
        const shippingCost = await $('//android.widget.TextView[@resource-id="edts.klik.android:id/tvDeliveryFee"]');
        const shippingCostValue = parseFloat((await (shippingCost).getText()).replace('Rp ', '').replace('.', ','));
        const totalPayment = await $('//android.widget.TextView[@resource-id="edts.klik.android:id/tvPay"]');
        const totalPaymentValue = parseFloat((await (totalPayment).getText()).replace('Rp ', '').replace('.', ','));
        const actualTotalPayment = itemGrossValue + shippingCostValue;

        console.log('Total payment value is: ' + totalPaymentValue + ', that is expected with actual payment: ' +actualTotalPayment);

        // Close Price details
        const closeBtn = await $('//android.widget.ImageView[@resource-id="edts.klik.android:id/ivCancel"]');
        await closeBtn.click();

        // Finish Order & Select Payment Method
        const checkoutProduct = await $('//android.widget.TextView[@resource-id="edts.klik.android:id/bvSubmit"]');
        await checkoutProduct.click();
        const backBtn = await $('//android.widget.ImageButton[@content-desc="Navigate up"]');
        await backBtn.click();
        await checkoutProduct.waitForDisplayed({timeout: 5000});
        await checkoutProduct.click();

        // const changeAddress2 = await $('//android.widget.TextView[@resource-id="edts.klik.android:id/tvAddress"]');
        // await changeAddress2.click();
        // const noteAddress = await $('//android.widget.EditText[@text="Catatan"]');
        // await noteAddress.waitForDisplayed({timeout: 10000});
        // await noteAddress.setValue('Edit');
        // const editName = await $('(//android.widget.EditText[@text="Lina"])[2]');
        // await editName.setValue(' Change');
        // const submitChanges = await $('//android.widget.TextView[@resource-id="edts.klik.android:id/tvSubmit"]');
        // await submitChanges.click();
        // await checkoutProduct.waitForDisplayed({timeout: 5000});
        // await checkoutProduct.click();
        
        const bcaVA = await $('//android.view.View[@resource-id="702"]');
        await bcaVA.waitForDisplayed({timeout: 10000});
        await bcaVA.click();
        const payBtn = await $('//android.widget.Button[@resource-id="payButton"]');
        await payBtn.click();
        const successOrder = await $('//android.widget.TextView[@resource-id="edts.klik.android:id/bvSubmit"]');
        await expect(successOrder).toHaveText('Cek Status Pembayaran');

        // Go back to Homepage
        const backShop = await $('//android.widget.TextView[@resource-id="edts.klik.android:id/bvShop"]');
        await backShop.click();
    })
})