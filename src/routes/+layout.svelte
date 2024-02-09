<script lang="ts">
  import '../styles/_reset.css';
  import '../styles/index.scss';
</script>

<div class="display">
  <div class="screen">
    <div class="wrapper">
      <div class="interlace"></div>
      <div class="envelope">
        <main class="terminal">
          <div class="content">
            <slot />
          </div>
        </main>
      </div>
      <div class="scanline"></div>
    </div>
  </div>
</div>
