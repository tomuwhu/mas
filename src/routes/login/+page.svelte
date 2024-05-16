<script>
    export let form
</script>
{#if !form?.success}
<form method="POST">
    <div><label for="mail">E-mail</label></div>
    <div><input type="email" name="mail" id="mail"/></div>
    <div><label for="pw">Jelszó</label></div>
    <div><input type="password" name="pw" id="pw"/></div>
    <div><button type="submit">Bejelentkezés</button></div>
</form>
{:else}
Bejelentkezve
{/if}
<style>
    form {
        display: inline-flex;
        background-color: bisque;
        box-shadow: 1px 1px 3px black;
        border-radius: 10px;
        margin: auto;
    }
    div {
        display: inline-block;
        background-color: aquamarine;
        border-radius: 6px;
        box-shadow: 1px 1px 3px inset black;
        padding: 10px;
        margin: 10px;
    }
</style>