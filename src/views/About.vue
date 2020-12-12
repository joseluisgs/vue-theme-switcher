<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img class="cat" :src="`${$store.state.baseURL}themes/${$store.state.theme}/cat.jpg`" alt="Cat" v-if="$store.state.theme">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quod voluptatum impedit
      animi obcaecati dolor reprehenderit quam neque temporibus! Maiores nobis obcaecati illum dolorum
      natus labore culpa saepe asperiores quas!</p>
    <p>In repudiandae voluptatum quo doloremque inventore placeat maxime vel consectetur vitae odit!
      Tempora saepe fugit at voluptas voluptatem alias harum quisquam minima aliquid culpa, necessitatibus nobis provident rem exercitationem? Debitis!</p>
    <p>Tempore, delectus error molestiae illum nihil sunt rerum nostrum, culpa excepturi ducimus vel.
      Odio ab cumque voluptatum laborum! Officia est quis architecto maxime repudiandae minima itaque velit porro fugit consectetur.</p>
    <p>Iste illum, nulla aliquid perspiciatis, ad illo aperiam laboriosam veniam alias voluptas dolores
      eius odit ducimus tempora voluptatum vitae at ea, sapiente asperiores non animi dolorum possimus. Distinctio, impedit error.</p>
    <p>Cupiditate consequatur eos, sed maiores quae provident excepturi commodi dicta debitis repellendus
      repudiandae voluptate sunt cumque optio accusamus reiciendis sint recusandae assumenda consequuntur
      blanditiis perspiciatis facere soluta. Nesciunt, aliquam eum.</p>
    <p>Quisquam, tenetur dolorum unde eum possimus accusantium laudantium doloremque odio beatae sint!
       Magnam illum esse ducimus ullam incidunt dolor ab odit accusamus eos molestiae dolorem ea obcaecati, harum quaerat quasi?</p>
    <p>Hic necessitatibus voluptatem neque dolore. Enim, dolorem explicabo rem, nihil unde ducimus
      architecto natus quibusdam quae vitae minima beatae voluptates perferendis pariatur reiciendis expedita? Nesciunt suscipit ut officiis tempora temporibus?</p>
    <p>Eum officiis, libero deleniti commodi vitae necessitatibus, voluptatum hic maxime molestiae
      maiores obcaecati, voluptatibus laborum eveniet totam dolorem. Doloremque iste, iusto nisi corporis quis assumenda ullam voluptates maxime numquam cupiditate!</p>
    <p>A odit iste inventore porro eligendi maiores quis quae placeat! Porro dolore numquam omnis quia,
      fugiat ipsum delectus nostrum quis repellendus nisi itaque sequi sapiente cupiditate assumenda quisquam incidunt quod.</p>
    <p>Nihil ullam unde commodi temporibus eos dolores! Necessitatibus, eum consequatur ipsum ab dolore
      qui ducimus quas magnam animi minima quia illum iusto eius, facilis dolores, tempore dicta illo sed reiciendis!</p>
  </div>
</template>

<style lang="scss" scoped>
.about {
  max-width: 900px;
  margin: 0 auto;
}

.cat {
  width: 100%;
  height: auto;
}
</style>
