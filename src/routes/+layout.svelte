<script>
    export let data
    $: loggedIn = data?.loggedIn
</script>
<div class="menu">
    {#if loggedIn}
    <a href="/">Prímteszt</a>
    <a href="/cica">Cica oldala</a>
    <a href="/krokodil">Krokodil oldala</a>
    <a href="/logout">Kijelentkezés</a>
    {:else}
    <a href="/login">Login</a>
    {/if}
</div>
<div class="slot">
    <slot/>    
</div>
<style>
    div.slot {
        text-align: center;
        padding: 10px;
        margin: 10px;
        box-shadow: 1px 1px 3px black;
        border-radius: 10px;
        background-color: white;
    }
    div.menu {
        background-color: black;
        padding: 5px;
    }
    :global(body) {
        margin: 0px;
        background-color: rgb(114, 114, 114);
    }
    a {
        all: unset;
        padding: 5px;
        background-color: rgb(31, 25, 25);
        color: white;
        cursor: pointer;
    }
    a:hover {
        background-color: antiquewhite;
        color: black;
    }
</style>