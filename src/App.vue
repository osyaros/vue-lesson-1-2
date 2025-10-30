<script setup lang="ts">
import { reactive, ref } from "vue";

const counter = ref<number>(0);

const text = ref<string>("Hello Kitty");

const isActive = ref<boolean>(false);
const hasError = ref<boolean>(true);
const imageUrl = ref<string>(
  "https://i.pinimg.com/736x/d4/38/c3/d438c31d0caf10b0dc17a5fcb503a38e.jpg"
);

const activeClass = ref<string>("active");
const errorClass = ref<string>("error-class");

const rowClass = ref<string>("row-class");
const columnClass = ref<string>("column-class");

const flexDirection = ref<string>("row");
const fontSizeNumber = ref<number>(30);
const imageObj = reactive({
  src: "https://i.pinimg.com/736x/d4/38/c3/d438c31d0caf10b0dc17a5fcb503a38e.jpg",
  alt: "Kitty",
});

const products = reactive([
  {
    id: 1,
    name: "Little Kitty",
    src: "https://i.pinimg.com/736x/d4/38/c3/d438c31d0caf10b0dc17a5fcb503a38e.jpg",
  },
  {
    id: 2,
    name: "Huge Mountains",
    src: "https://images.steamusercontent.com/ugc/52453354080448818/543783B601D5A853E3F50907B9722A314DFD92B6/?imw=512&amp;imh=320&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true",
  },
  {
    id: 3,
    name: "Валентин Стрыкало",
    src: "https://i.ytimg.com/vi/HzvWUkcyIDk/hqdefault.jpg",
  },
]);
const increment = () => {
  counter.value++;
};

const changeText = () => {
  isActive.value = !isActive.value;
  fontSizeNumber.value = fontSizeNumber.value + 10;
  if (flexDirection.value === "row") {
    flexDirection.value = "column";
  } else {
    flexDirection.value = "row";
  }
  if (text.value === "Hello Kitty") {
    text.value = "Hello Mountains";
    imageUrl.value =
      "https://images.steamusercontent.com/ugc/52453354080448818/543783B601D5A853E3F50907B9722A314DFD92B6/?imw=512&amp;imh=320&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true";
    imageObj.alt = "Mountains";
    imageObj.src =
      "https://images.steamusercontent.com/ugc/52453354080448818/543783B601D5A853E3F50907B9722A314DFD92B6/?imw=512&amp;imh=320&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true";
  } else {
    text.value = "Hello Kitty";
    imageUrl.value =
      "https://i.pinimg.com/736x/d4/38/c3/d438c31d0caf10b0dc17a5fcb503a38e.jpg";
    imageObj.alt = "Kitty";
    imageObj.src =
      "https://i.pinimg.com/736x/d4/38/c3/d438c31d0caf10b0dc17a5fcb503a38e.jpg";
  }
};
</script>

<template>
  <div>
    <p class="counterText">{{ counter }}</p>
    <button v-on:click="increment">+</button>
  </div>
  <div>
    <p
      class="inputText"
      :class="[{ [activeClass]: isActive }, errorClass]"
      :style="{ fontSize: fontSizeNumber + 'px' }"
    >
      {{ text }}
    </p>
    <button v-on:click="changeText">Change Text</button>
  </div>
  <div>
    <img v-bind="imageObj" width="200px" height="200px" />
  </div>
  <section
    class="products__container"
    :class="{
      [rowClass]: flexDirection === 'row',
      [columnClass]: flexDirection === 'column',
    }"
  >
    <article v-for="product in products" :key="product.id">
      <div v-if="product.name !== 'Валентин Стрыкало'">
        <img
          :src="product.src"
          :alt="product.name"
          width="200px"
          height="200px"
        />
        <p>{{ product.name }}</p>
      </div>
      <div v-else-if="product.id !== 2 && product.id !== 3">
        <img
          :src="product.src"
          :alt="product.name"
          width="200px"
          height="200px"
        />
      </div>
      <div v-else>
        <p>{{ product.name }}</p>
      </div>
    </article>
  </section>
</template>

<style>
.counterText {
  font-size: 48px;
}
.products__container {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.active {
  text-decoration: underline;
}
.error-class {
  color: red;
}
.row-class {
  flex-direction: row;
}
.column-class {
  flex-direction: column;
}
</style>
