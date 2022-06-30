<template>
    <header>
        <nav>
            <li>
                <img src="../assets/apple_logo.svg" alt="" />
            </li>
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Music</li>
            <li>Support</li>
            <li>Where to buy</li>
            <li>
                <img src="../assets/search.svg" alt="" />
            </li>
        </nav>
    </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
    background: #313132;
    position: relative;
    nav {
        width: 68%;
        margin: 0 auto;
        @include flex(space-between, center, none);
        li {
            list-style-type: none;
            color: $white;
            font-size: $font-sm;
            opacity: 0.8;
        }
    }
}
</style>
